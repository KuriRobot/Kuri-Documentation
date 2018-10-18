## Robot Status Updates

Defines behavior around communication about robot status changes between the cloud and the app.

### Motivation

In order for the app to be notified on the changing state of a robot through resetting, we require a mechanism whereby the cloud will notify the app of the robot's state. MQTT messages will be sent from the cloud to notify the app of these status changes.

### MQTT Topic

Cloud will use the following topic to send messages about robot status changes:
```
kuri/${opt:stage}/cloud_status/${robotUUID}
```

### MQTT Message Format

When a robot's status changes, the following message will be sent from the cloud:
```
{
  "message_id": "d688fc4a-4f54-487c-9ac2-5d6741bb75ed",
  "robot_id": "8160fccd-88a6-4280-ac8f-831f8d28e936",
  "message_timestamp": 1505771127.087398,
  "message_origin": "cloud",
  "action_id": "e11d3428-378d-11e8-b467-0ed5f89f718b",
  "message_type": "notification",
  "payload": {
    "status": "inactive"
  }
}
```
Valid robot statuses are `inactive`, `active`, `activating`, `resetting`, and `lost`. The status sent in the message is the status that the robot is being set to in the cloud.