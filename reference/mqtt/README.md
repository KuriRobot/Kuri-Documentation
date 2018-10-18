MQTT communications
-------------------

MQTT is used by AWS as part of their IoT solution. It is used to securely transfer messages between:

- the mobile app
- the robot
- the cloud

Among other things, it is used (or is planned) for:

- sending robot status to the app during on-boarding
- fetching the wander schedule (TODO)
- webrtc signalling (TODO)
- communicating moments that have been liked or deleted


Things
-----
"Things" are the what AWS calls devices in the IoT Gateway.  In our case, every robot is a separate thing.  A thing needs the following to work:
- Name
- Certificate
- Policy
- Attributes
  - stage (develop, staging, etc.)
  - robotUUID (not used)
  - version (not used)
  - document (shadow document for the service e.g. places)

The root thing name is the same as the robot uuid.  The root thing is created or updated to the correct stage attribute when the robot is on-boarded via the [PUT /robots/{robotUUID}/profiles/{profileUUID}](http://mayfield-api-documentation.s3-website-us-west-2.amazonaws.com/?url=https://nzryhztnw7.execute-api.us-west-2.amazonaws.com/develop/swagger.json#!/robots/putRobotsRobotuuidProfilesProfileuuid).  Additional things will be created for services as needed by the robot using MQTT when it boots, see [below](#multiple-things) for the process and naming convention of multiple thing shadows.  The MQTT service uses the robot uuid as the clientId when connecting to MQTT.  If the clientId does not match the thing name, the policy attached to the thing will not allow the robot to connect.  When switching the robot between development environments, be aware the stage attribute must be set properly since the policy is dependent on it.  If the stage name is wrong, the robot will not have permission to pub/sub on the topics it needs.  Additionally, the clientId used to connect to the IoT Gateway thing name **must** contain clientId, which is the same as the robot uuid.  If the thing name does not contain the clientId, the robot will not be allowed to connect.  See below for the naming convention to be used for thing names.

Thing Shadow
-----

*This documentation will give a high level overview of what the thing shadow is and how it works.  It will be up to the implementor to read the thing shadow [documentation provided by AWS](https://docs.aws.amazon.com/iot/latest/developerguide/iot-device-shadows.html) and the documentation for the thing shadow library that they will be using.*

Thing shadow is a service provided by AWS on top of MQTT that allows you to store a JSON document.  It is intended to store configuration data related to a [Thing](#things).  It allows the shadow to act as a single source of truth.  It also allows you to update the shadow even when the device is offline by separating the configuration into **desired** and **reported** ([see definitions below](#shadow-document-properties)).  A consumer is able to get or set the state of the shadow via MQTT, HTTP or libraries that abstract the protocol from the user.  In addition to topics to get and set, there is also a topic for deltas, which will report the differences between desired and reported.  The shadow also provides a version attribute in the payload to allow for optimistic locking when requesting an update of the shadow.

### Notable libraries:
[Python AWSIoTShadowClient](https://github.com/aws/aws-iot-device-sdk-python#awsiotshadowclient)

[NodeJS AWS.IoTData](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/IotData.html)

### Noteable Limitations
The limitations of the IoT service and thing shadows are [documented here](https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#device-shadow-limits).  Notable limits:
* The maximum number of levels in the desired or reported section of the JSON device state document is 5
* Maximum size of a JSON state document	8 KB.  Includes reported and desired.

### Multiple Things
In order to support shadows greater than the 8 KB limit multiple thing shadows are needed.  A client can connect to multiple thing shadows.  To ensure that a robot can only connect to its own thing shadows a policy will be created to ensure that the thing name contains the robotUUID.  As stated above, the root Thing will be the UUID of the robot.  Data that is small enough to be kept in the initial thing should use the root thing (e.g. configId).  Things that require larger or growing sets of data should have their own thing and shadow created (e.g. places). The naming convention for additional things will be the UUID of the robot with a suffix to indicate what the thing shadow is used for example for places would be `bdfd3238-a84e-4ef3-adfc-2a1b423622be_places`.  

Additional things will be created when the robot does its initial connections to MQTT.  This is to ensure that if new services are added to a robot that require additional things, the things are available for the robot to connect to.  The robot will publish a "request" to the MQTT topic `kuri/{environment}/shadows/{robot-uuid}/` an array of all thing shadows it requires.  The cloud will create the thing shadows that do not exist and will publish a "response" to `kuri/{environment}/shadows/{robot-uuid}/` with the list of all the thing shadows that are available.

Example Request:

```
{
  "message_id": "08074974-a051-42d2-bc03-3baac90893c8",
  "robot_id": "adf59524-e6b0-451f-97f8-834ac7a6a906",
  "message_timestamp": 1517531553.087398,
  "message_type": "request",
  "payload": {
    "shadows": [
      "places",
      "schedule"
    ]
  },
  "action_id": "c4b3e4f3-4b3b-4e4b-996d-ad4183b14069"
}
```

Example Response:

```

{
  "message_id": "08074974-a051-42d2-bc03-3baac90893c8",
  "robot_id": "adf59524-e6b0-451f-97f8-834ac7a6a906",
  "message_timestamp": 1517531553.087398,
  "message_type": "response",
  "payload": {
    "shadows": {
      "schedule": "adf59524-e6b0-451f-97f8-834ac7a6a906-schedule",
      "places": "adf59524-e6b0-451f-97f8-834ac7a6a906-places"
    }
  },
  "action_id": "c4b3e4f3-4b3b-4e4b-996d-ad4183b14069"
}
```

### Deltas
If a delta is generated while the client is offline the delta will be missed and the client should `get` the entire shadow when it comes back online.

[See the documentation here for additional details](https://docs.aws.amazon.com/iot/latest/developerguide/using-device-shadows.html#delta-state)

### Thing Shadow Flow

The robot should behave as follows:

1. When the robot comes online or reconnects, it does a shadow get to check the currently desired, reported and delta state.  If there is a delta, that means there was a requested configuration change while the robot was offline that should be applied. The robot should then make that change, and update the reported state of the thing shadow.
2. When the robot is online it will continuously listen for deltas. A delta is sent to the robot any time the desired state is updated to be different than the reported state. When a message is received, the robot updates its internal configuration based on the property that changed.
3. When the configuration change is applied the robot should report the new configuration in the reported section to the shadow.  Under no circumstances should the robot update the desired state.

The app should behave as follows:

1. When the app is interested in the current configuration state of the robot it can send a `GET` request to the thing shadow REST endpoint `https://endpoint/things/thingName/shadow`.
    * If the thing shadow has never been created (shadows are only created the first time an update is sent), it will return the following error:

```
{
  "code": 404,
  "message": "No shadow exists with name: '{robotUUID}'"
}
```

2. When the app wants to request a change to the robot configuration, it will make a POST request to the thing shadow REST endpoint with the desired state.
3. The app should only update the desired state of the shadow.  Under no circumstances should the app, cloud or any client other than the robot update the reported state.

### Thing Shadow Versioning

Each shadow should be versioned for data format separately from the version that the AWS IoT shadow service uses to version updates.

Example:

```
{
  "desired": {
    "schedule": [],
    "apiVer": 1 // Data format version
  },
  "reported": {
    "schedule": [],
    "apiVer": 1 // Data format version
  }
  "version": 1123 // AWS IoT Shadow Version for updates  
}

```

### Current Clients Using Thing Shadow
[Schedule](./schedule.md)

Topic
-----

Topics implement a broadcast mechanism. They echo any data sent to them back to the sender.
The topic name format is as follows:

```
kuri/{environment}/{endpoint}/{robot-uuid}
```

with:

- `environment`: currently `develop`, later `staging`, `production`...
- `endpoint`: see table below
- `robot-uuid`: the UUID of the robot


Packet format
-------------

The packet is a JSON string
The following top-level structure is expected

```
{
  "api_version": "1",
  "message_id": "08074974-a051-42d2-bc03-3baac90893c8",
  "robot_id": "alphabed6",
  "message_timestamp": 1505771127.087398,
  "message_type": "request",
  "message_origin": "robot",
  "payload": {
    "status": "WAIT_FOR_CONFIG",
    "domain": "BEHAVIOR",
    "data": ""
  },
  "action_id": "aeef79ac-9cba-11e7-9a88-9cefd5ffc788"
}
```

### fields

| field | description | type |
|----------|-------------|---------|
| message_id | a unique ID for the message | string |
| robot_id | the robot UUID | string |
| message_timestamp | the current unix timestamp | number |
| message_type | **deprecated** indicates the direction of the message, see below | string |
| message_origin | Indicates the sender of the message: robot, cloud, or app.  See below | string |
| payload | endpoint-specific payload, see endpoints below | object |
| action_id | a unique ID shared by all messages pertaining to the same 'action' | string |
| api_version | The Robot API version of the assosciated payload | string |

### Message Type and Message Origin

Message types were originally implemented to provide echo cancellation.  For example, the robot will ignore
any message with the message type set to 'request.  Unfortunately, some of the names
can be confusing because they encode additional data not used for echo cancellation.
For this reason, Message types are being deprecated in favor of Message Origin.

During the transition from message_type to message_origin, receives of messages should check for message_origin first
and fall back to message_type if message_origin is not present

#### Message Type
**deprecated**

| type | source | destination |
|----------|-------------|---------|
| request | robot | cloud |
| response | cloud | robot |
| notification | cloud | robot |
| update | robot | mobile app |
| action | mobile app | robot |

#### Message Origin
The message origin is used to track the originator of a MQTT mesasge.  The message_origin is one of the following strings:

 * robot
 * cloud
 * app

The robot should ignore messages with message_origin set to 'robot.'  The cloud should ignore messages with message_origin set to 'cloud.' etc. . .

### actions

Actions are typically the combination of a request and its associated response. They can span more than one exchange.
They should be limited in time.


Endpoints
---------

This document was originally on this [Wiki Page](https://mayfieldrobotics.atlassian.net/wiki/spaces/SOF/pages/54101489/MQTT+endpoints)

| endpoint | description | clients |
|----------|-------------|---------|
| [photo](#Photo)    | DEPRECATED photo metadata is triggered off an S3 event when meta data is uploaded now | robot -> cloud |
| [schedule](#Schedule)|called requesting changes to the robots schedule|app -> robot|
| [status](status_endpoint.md)| called when the robots status changes|robot -> app|
| [status_sync](status_sync_endpoint.md) | Provides a mechanism for the app to query robot status
| [_sts](#sts)| called when the robot needs to update its sts token|robot -> cloud|
| [moment_actions](moment_actions.md) | Communication to get moments that have been liked or deleted by user | robot <-> cloud|
| [command](#Command) | Sends an app command to the robot, equivalen to the ROSBridge /command topic | cloud -> robot |


### Photo

DEPRECATED

### Schedule
See [Schedule](./schedule.md)


### STS

STS = [Security Token Service](http://docs.aws.amazon.com/STS/latest/APIReference/Welcome.html)

**endpoint name:** `_sts`

**topic policy:**

- query
- push
- private (hence the leading underscore)

**message body:** See [STS Refresh](../cloud/lambdas/sts-refresh.md)

### Moment actions

See [Moment Actions](./moment_actions.md)

### Command

Sends a command to the robot. The payload has a 'name' field containing the command name and an optional 'params' field containg a dictionary of key-value pairs passed as parameters to the command.
