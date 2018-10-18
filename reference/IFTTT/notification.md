---
layout: reference
title: User Notification
category: IFTTT
---

Cloud will communicate with app over the `kuri/{environment}/ifttt_event/{robot-uuid}` topic for IFTTT relating events.

## Notification on Kuri voice command trigger events
- On receiving a message from Kuri that an IFTTT trigger event has occurred (i.e. voice command is matched), cloud will send the following payload to notify the app:
    ```
    {
        "event": "ifttt_trigger",
        "trigger_fields": [
            {
                "field": "voice_command",
                "field_value": <VOICE_COMMAND>
            }
        ]
    }
    ```

## Notification on Kuri action events
- On being notified by IFTTT that an an IFTTT action should be performed (i.e. move to the kitchen and giggle), cloud will send the following payload to notify the app:
    ```
    {
        "event": "ifttt_action",
        "action_fields": [
            {
                "field": "place",
                "field_value": "Kitchen"
            },
            {
                "field": "action",
                "field_value": {
                    "type": <ACTION_TYPE>,
                    "name": <ACTION_NAME>
                }
            }
        ]
    }
    ```
    - `ACTION_TYPE` is either `romoji` or `sound`
    - `ACTION_NAME` is the action name (e.g. Giggle) that the app will display in the status in Kuri Live
- If an action failed because incorrect action field option (like specifying a place that is not mapped by user), cloud will send the following payload to notify the app:
    ```
    {
        "event": "ifttt_error",
        "error": <ERROR_MESSAGE>
    }
    ```


## App change
- Listen for messages in MQTT topic for IFTTT actions sent to robot to display in the Kuri Live screen
- Listen for messages in MQTT topic for IFTTT trigger events that robot is sending to display in the Kuri Live screen
- Listen for messages in MQTT topic for IFTTT errors to display in the Kuri Live screen
- Display connect/disconnect button under `Settings` for IFTTT by calling `GET /third-party/info`
