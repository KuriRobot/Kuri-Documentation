## Moment Actions

Defines behaviour around communication about moment actions (by marking a moment as liked or deleting a moment) by a user triggered between the cloud and robot.

### Motivation

In order for the robots to learn from users' interaction with moments, robots need to know what moments have been liked or deleted by users. MQTT messages will be sent from the cloud to notify robots of moment actions and robots can also request moment actions since a specified timestamp.

### MQTT Topics

Cloud will use the following topic to send messages about moment actions:

```
kuri/${opt:stage}/moment_actions/update/${robotUUID}
```

Robot will use the following topic to send messages to request for moment actions:
```
kuri/${opt:stage}/moment_actions/request/${robotUUID}
```


### Moment Action by User

When a moment action is triggered by a user, the following message will be sent from the cloud:
```
{
  "message_id": "08074974-a051-42d2-bc03-3baac90893c8",
  "robot_id": "alphabed6",
  "message_timestamp": 1505771127.087398,
  "message_origin": "cloud",
  "payload": {
    "moment_actions": [
      {
        "event": "like",
        "uuid": "aeef79ac-9cba-11e7-9a88-9cefd5ffc788"
      }
    ]
  },
  "action_id": "8e0a3da2-1c0e-11e8-accf-0ed5f89f718b"
}
```

Event of a moment action can be the following values
* `delete`: a moment has been deleted by a user
* `like`: a moment has been liked by a user (i.e. the moment feedback has been set to 1)
* `unlike`: a previously liked moment has been unliked by a user (i.e. the moment feedback has been set to 0)
* `dislike`: a moment has been disliked by a user (i.e. the moment feedback has been set to -1). Note that this feature is not implemented by the mobile app yet
* `share`: a moment has been shared by a user (the MQTT message will have to be sent from the mobile app as the cloud does not have this information)

### Robot Requests for Moment Actions

If a robot is offline when moment action messages are sent from the above section, the robot can request a list of moments that have been liked or deleted since a specified time by sending the following message:

```
{
  "message_id": "6add4e42-1c0d-11e8-accf-0ed5f89f718b",
  "robot_id": "alphabed6",
  "message_timestamp": 1505771127.087398,
  "message_origin": "robot",
  "payload": {
    "since_timestamp": 1519771613.123857,
    "since_moment_uuid": "7c5bc7b6-27a7-11e8-b467-0ed5f89f718b"
  },
  "action_id": "f3a9087e-1c0d-11e8-accf-0ed5f89f718b",
  "api_version": "2"
}
```

Note the `since_moment_uuid` property is not required, and is only used for paging to avoid infinite loops if more than 100 actions have the same timestamp.

The cloud will then respond with the following message:
```
{
  "message_id": "0d8cdee6-1c0e-11e8-accf-0ed5f89f718b",
  "robot_id": "alphabed6",
  "message_timestamp": 1505771127.087398,
  "message_origin": "cloud",
  "payload": {
    "moment_actions": [
      {
        "event": "like",
        "uuid": "584e3444-1c12-11e8-accf-0ed5f89f718b"
      },
      {
        "event": "delete",
        "uuid": "5c0c0f16-1c12-11e8-accf-0ed5f89f718b"
      },
      {
        "event": "delete",
        "uuid": "600ca044-1c12-11e8-accf-0ed5f89f718b"
      }
    ]
  },
  "action_id": "f3a9087e-1c0d-11e8-accf-0ed5f89f718b"
}
```
The message will only contain moment actions (except `share` as the cloud does not have records of when a moment has been shared from the mobile app) that occur since the `since_timestamp` time sent by the robot ordered by the times that the action occur in ascending order. If multiple moment actions have the same timestamp, then they will be sorted by the moment uuids in ascending order.

The cloud will only send 100 moments per message since there is a size limit to how big an MQTT message can be. If there are more than 100 moment actions since the time specified by the robot request, the message will contain 2 additional properties `next_since_timestamp` and `next_moment_uuid` to show the time and moment uuid the robot should request for the next page.
```
{
  "message_id": "af16d14c-1cc5-11e8-accf-0ed5f89f718b",
  "robot_id": "alphabed6",
  "message_timestamp": 1505771127.087398,
  "message_origin": "cloud",
  "payload": {
    "moment_actions": [
      {
        "event": "like",
        "uuid": "584e3444-1c12-11e8-accf-0ed5f89f718b"
      },
      ...
      {
        "event": "delete",
        "uuid": "600ca044-1c12-11e8-accf-0ed5f89f718b"
      }
    ],
    next_since_timestamp: 1505973147.017238,
    next_moment_uuid: '7c5bc7b6-27a7-11e8-b467-0ed5f89f718b'
  },
  "action_id": "f3a9087e-1c0d-11e8-accf-0ed5f89f718b"
}
```

See [MQTT README](README.md) (fields section) for more information about message fields.
