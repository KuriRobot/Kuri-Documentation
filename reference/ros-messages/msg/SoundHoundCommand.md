---
layout: reference
title: SoundHoundCommand.msg
package: audio_msgs
category: message
tags: 
- voice command
- intent
- ClientMatchCommand
- RobotCommand
- VolumeCommand
---

## Message Definition
```
string name
mayfield_msgs/KeyValue[] params
```

## Arguments
#### `name`
Name of the command matched by the Houndify voice command intent service

#### `params`
Additional parameters returned in the Houndify response as key-value pairs, 
specific to the type of command matched, eg.

```
name: CustomCommand
params:
  -
    k: name
    v: Happy Birthday Song
```

```
name: TurnCommand
params:
  -
    k: direction
    v: -90
```

## Related Documentation
``Exchange.msg``  
``/audio/voice_delegate/exchange``  
