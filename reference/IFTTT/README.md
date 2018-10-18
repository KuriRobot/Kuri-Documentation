---
layout: reference
title: IFTTT
category: IFTTT
---

## Requirements
Robot can trigger IFTTT trigger and react to IFTTT action according to user defined IFTTT Applets.

## Implementation Detail
* [Triggers and Actions](triggers_and_actions.md)
* [Robot Integration](robot_integration.md) 
* [Cloud Integration](cloud_integration.md)
* [Notification](notification.md)

## Cloud <-> Robot workflow

### Trigger (i.e. user issues a voice command that matches IFTTT trigger)
1. User creates an Applet that uses Kuri voice command trigger
1. IFTTT notifies Cloud that there is a voice command used as a trigger or a voice command trigger is removed from all user applets
1. Cloud notifies Robot of available voice commands on the `/ifttt_trigger` topic. Example payload:
    ```
    {
        "name": "ifttt_voice_commands",
        "params": {
            "voice_commands": [
                {
                    "trigger_identity": <TRIGGER_IDENTITY_1>,
                    "voice_command": <VOICE_COMMAND_1>
                },
                {
                    "trigger_identity": <TRIGGER_IDENTITY_1>,
                    "voice_command": <VOICE_COMMAND_1>
                }
            ]
        }
    }
    ```
1. User issues voice command to Kuri, then robot sends to SoundHound and receives the transcribed command. If it matches an IFTTT voice command trigger (e.g. <VOICE_COMMAND_1>), robot sends MQTT message to `/ifttt_trigger` topic.
    - Note that an IFTTT voice command will overwrite existing local command (e.g. if there is an IFTTT voice command trigger for "Move to the kitchen", Kuri will no longer moves to the kitchen on receiving that voice command, unless the IFTTT Applet sets up an action for Kuri to move to the kitchen). Example payload:
        ```
        {
            "name": "ifttt_trigger",
            "params": {
                "trigger_identity": <TRIGGER_IDENTITY_1>,
                "trigger_fields": {
                    "voice_command": <VOICE_COMMAND_1>
                }
            }
        }
        ```
1. Cloud lambda processes the MQTT message and adds an entry to the `iftttTriggerEvents` database table that stores `triggerIdentity`, `triggerFields`, `userId` and timestamp
1. Cloud sends a request to IFTTT `https://realtime.ifttt.com/v1/notifications` to notify IFTTT of the new trigger for the given `userId` and `triggerIdentity`
1. When IFTTT requests for triggers by calling `/ifttt/v1/triggers/voice_command`, a response with the trigger above is returned (along with any other triggers that match the `trigger_identity` of the request.
    - Triggers that are returned in the response will be marked as sent for the `trigger_identity` and IFTTT source that was part of the IFTTT request so that they don't get sent to IFTTT multiple times). Example response:
        ```
        {
            "trigger_identity": <TRIGGER_IDENTITY_1>,
            "triggerFields": {
                "command": <VOICE_COMMAND_1>
            }
        }
        ```

### Action (i.e. IFTTT sends a request to trigger action for moving to kitchen and playing an animation)
1. Cloud receives request on `/ifttt/v1/actions/move` with user access token identifying a user.
    - `action_name` is optional and only specified if action involves moving to a place and then performing an animation. Example payload:
        ```
        {
            "actionFields": {
                "place_name": "kitchen",
                "action_name": "giggle"
            }
        }
    ```
1.  Cloud sends the robot associated with user an MQTT message to the `/command` topic with the following payload. Note that `action_id` is not sent if the action is only to tell robot to move to a place without performing an animation.
    ```
    {
        "name": "ifttt_move_command",
        "params": {
            "waypoint_uuid": <KITCHEN_WAYPOINT_UUID>,
            "action_id": <GIGGLE_ACTION_ID>
        }
    }
    ```
1. Robot processes the `command` MQTT message and moves to the place <KITCHEN_WAYPOINT_UUID> and performs the action <GIGGLE_ACTION_ID> as specified by message payload.

## References
- [Robot Command Service](``/command``)
- [MQTT specification](/reference/mqtt/README.md)