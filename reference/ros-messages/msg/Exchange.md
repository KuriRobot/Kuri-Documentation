---
layout: reference
title: Exchange.msg
package: audio_msgs
category: message
tags: 
- voice command
- transcription
- commands
---

## Message Definition
```
SoundHoundCommand[] commands
string error
string transcription
```

## Arguments
#### `commands`
List of ``SoundHoundCommand``s resulting from the most recent transcribed 
request

#### `error`
An error message, if any

#### `transcription`
The plain text transcription of the last detected voice command

## Related Documentation
``/audio/voice_delegate/exchange``  
