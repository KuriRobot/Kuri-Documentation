---
layout: reference
title: GetField.srv
package: audio_msgs
category: service-message
tags: 
- SEDiag 
---

## Message Definition
```
string name
---
string json_value
```

## Arguments
#### `name`
Name of the field to retrieve information for. A list of the fields available 
can be obtained by calling the ``/audio/voice_delegate/list_fields`` ROS 
service

#### `json_value`
The string JSON representation of the value for the field requested

## Related Documentation
``/audio/voice_delegate/get_field``  
