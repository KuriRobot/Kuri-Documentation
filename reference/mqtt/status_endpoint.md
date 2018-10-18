# Status Endpoint
The robot status MQTT endpoint is used to communicate what the robot is currently doing to the cloud.  Because Kuri can have many orthagonal statuses (power level, wandering, playing music), messages on the status endpoint are divided into multiple domains

## Status Endpoint Definition

### Endpoint Name
```
"status"
```

## Payload Definition
```
{
"status": <status>
"domain": <domain>
"data": <optional domain-specific data>
}
```
Where <status> and <domain> are the strings documented below

## List of Domains
Below is a table of status domains that Kuri will publish.  Following the table is a detailed description of the statuses that
can appear in each domain

| domain | description |
| --- | --- |
| BEHAVIOR | Tracks the current behavior |
| CONNECTED | Used by the MQTT node to indicate that the robot is online or offline |
| DOCK_SENSOR | Used to signal when the robot can see the dock with its docking telescope |
| LIVE_MODE | Indicates when someone is viewing the robot video stream and any control they may have over the robot |
| MEDIA | Whether or not the robot is playing music |
| NAVIGATION | Reports the status of autonomous navigation |
| POWER | Used to indicate when the robot is on or off the dock, or charging |
| SYSTEM | Information about the robot powering on and off, or updating |
| TOUR | This domain contains information that can determin whether or not the robot is mapping - either during onboarding or resume mapping (deprecated) |
| TOUR2 | Status of mapping stack. Indicates whether the robot has a map, and which map making flow is active. |
| LOCALIZATION | Tracks whether Kuri has trouble figuring out where she is. Refer to [localization states](../kuri_behavior/logical_concurrent_states/localization.md) for more information. |
| SLAM | Indicates which step of the mapping process is active if the robot is mapping. |
| UPDATING | Indicates the status of any online updates |
| BLUETOOTH | Indicates the status of the Bluetooth Classic node |

### BEHAVIOR Domain
The behavior domain tracks the status of the underlying state machine.  The statuses below are arranged in roughly the chronological order that they occur on a robot

#### Onboarding Behavior Statuses
| status | description |
| --- | --- |
| ONBOARDING_ASLEEP | The robot is asleep at the beginning of unboxing/onboarding. It is waiting to be configured, docked, and then touched on the head |

#### Docking Behavior Statuses

| status | description |
| --- | --- |
| DOCKING | Kuri is attempting to dock. |

Each docking behavior status's data field will look like the data field in the
following message:

```python
{
    "status": "DOCKING,
    "domain": "BEHAVIOR",
    "data": {
        # Time since epoch when this docking session started. Resets (like
        # everything else in this structure) if docking is interrupted by
        # another task (such as being pickedup or asked to navigate
        # somewhere else) and then resumed.
        "time": 1529622123.854073,

        # Whether Kuri is navigating, ILS docking, or in one of the other
        # transient docking states that we don't care about (in which case
        # this field would be just an empty string).
        "status": "NAV"/"ILS"/"",

        # Total number of navigation attempts is sum of values of 'succeeded'
        # and 'failed'. Sum can be zero if only ILS docking has been started.
        "nav": {
            # Number of navigation attempts where Kuri got to a docking
            # waypoint.
            "succeeded": 5,

            # Number of navigation attempts where Kuri was not able to get to
            # the intended docking waypoint.
            "failed": 3,

            # Number of navigation attempts aborted early because Kuri saw the
            # docking LEDs.
            "aborted": 0
        },

        "ils": {
            # Number of times ILS docking has been started so far.
            "tries": 6,

            # Number of times ILS docking has been started, and at least one
            # dock LED is visible. Note that Kuri does not continue to ILS dock
            # if no LEDs are visible.
            "visible": 5,

            # Number of failed ILS docking attempts.
            "failed": 4

            # NOTE: There's no count of succeeded attempts because one success
            # would cause Kuri to stop docking.
        }
    }
}
```


#### Normal Operation Behavior Statuses
| status | description |
| --- | --- |
| IDLE | The steady-state status of normal operation.  This status is used to clear any other status |
| LISTENING | After "Hey Kuri" when the robot is listening for a user command |
| NAVIGATION | Used to display a status in KURI live 'Kuri is going to X' |
| DOCKING | Indicates the robot is going home to dock |
| PICKED_UP | Used to display a status in KURI live 'Kuri has been picked up' |
| WANDER_PHOTO_SHOOT | Used to display a status in KURI live 'Kuri is looking for moments to capture'|
| WANDER_START or WANDER_PLAN or WANDER_EXECUTE | Used to display a status in KURI live ' Kuri is thinking about where to go' |

#### Change Map Behavior Statuses (deprecated - use SLAM)
KURI behavior statuses during the 'Update Map' flow. Mostly map to ONBOARDING mapping states. Used to drive the 'Update map' flow.

| status | description | 
| --- | --- |
| CHANGEMAP_UNDOCKING | Update map flow, KURI is leaving the dock. |
| CHANGEMAP_TELEOP | DEPRECIATED |
| CHANGEMAP_FAILED_TO_DOCK_PLEASE_HELP | KURI has failed to auto-dock. User prompt to nudge KURI onto the dock. (we don't have a similar state in ONBOARDING mapping) |
| CHANGEMAP_PROMPT_CLOSEMAP | KURI has indicated she wants to finish update map flow. Usually happens when she docks, but she can enter this state at any time. Sends user to the 'Review Floor Plan' screen |
| CHANGEMAP_PUT_ON_DOCK_TO_RESUME | Same as ONBOARDING_PUT_ON_DOCK_TO_RESUME |
| CHANGEMAP_FAILED | Changemap fails. Show user an alert and back out of change map flow |
| CHANGEMAP_ARCHIVE_MAP | Indicates that the map is undergoing internal processing.  This could take a user noticeable amount of time |
| CHANGEMAP_ACCEPT_MAP | ??? |
| CHANGEMAP_SUCCEEDED | A transient state upon existing resume mapping DEPRECIATED  |
| CHANGEMAP_FAILED_USER_ABORTED | A transient state that happens when the user requests quitting resume mapping DEPRECIATED |

### DOCK_SENSOR Domain
The status of the robot's docking telescope.  This domain should only be used during onboarding or during resume mapping

| status | description |
| --- | --- |
| DOCK_VISIBLE | The robot's dock is visible from its front telescope |
| DOCK_NOT_VISIBLE | The robot's front telescope is not able to see the dock |

### LIVE_MODE Domain
| status | description |
| --- | --- |
| NOT_CONNECTED | No users are connected to Kuri |
| OBSERVER_MODE | A user is connected to the robot video stream, but is not controlling the robot |
| OVERRIDE_MODE | A user is connected to the robot video stream and is controlling the robot |

### MEDIA Domain
| status | description |
| --- | --- |
| PLAYING | The robot is playing its own music (pancake robot or URI) |
| STOPPED | The robot is not playing its own music |

The URI of the media being played will be stored in the status payload's 'data' field

Note:  In the current implementation, Playing music via the robot's bluetooth audio connection will not update the MEDIA domain status.  This is not the desired implementation

### NAVIGATION Domain
| status | description |
| --- | --- |
| NORMAL | The robot is not 'stuck'.  Since there is no 'not navigating' status, this will be the status most of the time |
| STUCK | Autonomous navigation is stuck |

### CONNECTED Domain
| status | description |
| --- | --- |
| NOT_RESPONDING | Sent as the MQTT node's last will and testiment when the node goes offline |
| ONLINE | Sent when the robot's MQTT node is first connected, or when the MQTT node comes online after being offline |

The 'NOT_RESPONDING' status is generated as the MQTT client "Last Will and Testament (LWT)"  This message is set up when the robot is connected and is automatically sent if the mqtt node goes offline.  See the related Python SDK documentation for [LWT here](https://s3.amazonaws.com/aws-iot-device-sdk-python-docs/sphinx/html/index.html#AWSIoTPythonSDK.MQTTLib.AWSIoTMQTTClient.configureLastWill)

### POWER Domain
| status | description |
| --- | --- |
| DOCKED | The robot is on the dock |
| CRITICAL | Kuri is not docked and the battery level is below the [Battery Critical threshold](../kuri_behavior/named_constants.md) |
| LOW | Kuri is not docked and the battery level is below the [Battery Low threshold](../kuri_behavior/named_constants.md) |
| UNDOCKED | Kuri is not docked and the battery level is high enough that it is not CRITICAL or LOW |

The rounded battery percentage will be in the 'data' field as 'battery_percentage'.

### SYSTEM Domain
| status | description |
| --- | --- |
| NORMAL | The default system status |
| SHUTDOWN | The robot is shutting down and will soon power off, or has already powered off |

### TOUR Domain
This domain is deprecated

### TOUR2 Domain
This domain determines the state of maps/mapping on the robot.

| status | description | 
| --- | --- |
| TOUR2_NO_MAP | The robot has no map. The app should take the user through Initial Mapping | 
| TOUR2_INITIAL_USER_MAPPING | Indicates the robot is in the Initial Mapping flow (so has no fallback map). The data field can contain a JSON dictionary with first_moment_captured indicated as true or false |
| TOUR2_USER_MAPPING | Indicates the robot is in Reset Mapping and can cancel to the existing map |
| TOUR2_USER_RESUME_MAPPING | Indicates the robot is in the Resume Mapping flow | 
| TOUR2_LOCALIZING | Indicates the robot has a valid map and is not mapping |

Refer to the [Map Making Flow](../kuri_behavior/map_making.md#statuses) for more information.

### SLAM Domain
This domain has detailed map phase information

| status | description | 
| --- | --- |
| SLAM_INACTIVE | The robot is not mapping | 
| SLAM_STARTING | The robot is initializing mapping and automatically gather the first scans (undocking, etc) | 
| SLAM_MAPPING | The robot is mapping |
| SLAM_WAITING | The robot is back at the dock and is waiting for the user to accept the map or continue mapping |
| SLAM_FAILED | The robot has paused mapping due to being kidnapped and is waiting to be put back on the dock to resume mapping or for mapping to be abandoned. |
| SLAM_FINISHING | The robot is closing an accepted map |
| SLAM_COMPLETED | Transient and probably useless state after the map is closed |
Refer to the [Map Making Flow](../kuri_behavior/map_making.md#statuses) for more information.

### UPDATING Domain
This domain indicates when the robot is updating.

| status | description |
| --- | --- |
| UPDATE_INACTIVE | The robot is not updating |
| UPDATE_CHECKING | The robot is checking for updates |
| UPDATE_DOWNLOADING | The robot is downloading an update |
| UPDATE_FLASHING | The robot is writing the update to eMMC and will reboot when done |

### BLUETOOTH Domain
This domain indicates the connection status of the Bluetooth Classic node
| --- | --- |
| BLUETOOTH_CONNECTED | A device is connected to Kuri |
| BLUETOOTH_DISCONNECTED | No devices are connected to Kuri |

### MOVE_DOCK Domain
This domain is used for dock_relocation.

| status | description | 
| --- | --- |
| MOVE_DOCK_INACTIVE | State where new dock flow is not active |
| MOVE_DOCK_STARTED | The move dock flow has started |
| MOVE_DOCK_IN_KNOWN_AREA | Indicates the new dock is in the existing map |
| MOVE_DOCK_IN_NEW_AREA | Indicates the new dock is not in the existing map |
| MOVE_DOCK_DRIVING | Kuri is driving to the docking waypoint of the new dock |
| MOVE_DOCK_DRIVING_FAILED | Kuri was not able to drive to the new docking waypoint |
| MOVE_DOCK_WAITING | Kuri is waiting to dock in its new location |
| MOVE_DOCK_SUCCEEDED | Relocation worked |
| MOVE_DOCK_FAILED | Relocation failed |

