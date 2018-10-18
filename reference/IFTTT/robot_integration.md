---
layout: reference
title: Robot Integration
category: IFTTT
---

All MQTT messages will follow the format outlined in the [MQTT section](../../mqtt/README.md). Only the topic and the `payload` property of the MQTT message is outlined below.

## Voice command options
Voice commands a user has defined in IFTTT will be communicated to the robot through robot parameters. Robot will receive updates when voice commands have changed the same way as updates to other robot parameters.
    - Note that robot will receive multiple messages if list of voice commands changes (i.e. user creates an applet with one voice command a week ago, then add another applet with a different voice command today).
    - Robot should take the list of voice commands from latest robot parameter value.
    - Robot should save the list of voice commands to permanent storage on disk to use on startup.

- Parameter key: `usersetting_ifttt_trigger_voice_commands`
- Parameter value will be a stringified JSON string of an array with the following format:
    ```
    [
        {
            "trigger_identity": <TRIGGER_IDENTITY_1>,
            "voice_command": <VOICE_COMMAND_1>
        },
        {
            "trigger_identity": <TRIGGER_IDENTITY_2>,
            "voice_command": <VOICE_COMMAND_2>
        }
    ]
    ```

## Voice command trigger

If robot determines that a voice command matches one of the voice commands defined by the user, then robot sends a MQTT message to notify the Cloud that an IFTTT trigger event has occurred.
- Note that an IFTTT voice command will override the existing local command (e.g. if there is an IFTTT voice command for "Move to the kitchen", then robot will not move to the kitchen unless the IFTTT trigger has an IFTTT action to move the robot).
- Topic: `kuri/{environment}/ifttt_trigger/{robot-uuid}`
- Payload:
    ```
    {
        "name": "ifttt_trigger",
        "params": {
            "trigger_identity": <TRIGGER_IDENTITY>
        }
    }
    ```

## IFTTT actions
The Cloud will translates IFTTT action requests to a known robot command.

### Animation action
- Payload:
    ```
    {
        "name": "ifttt_animation_command",
        "params": {
            "action_id": <ANIMATION_ACTION_ID>
        }
    }
    ```

### Move action
- Move action is a compound action that has a `waypoint_uuid` and an optional `action_id` to signify an animation that should be done after robot has moved to the waypoint
- Payload:
    ```
    {
        "name": "ifttt_move_command",
        "params": {
            "waypoint_uuid": <WAYPOINT_UUID>,
            "action_id": <ANIMATION_ACTION_ID>
        }
    }
    ```