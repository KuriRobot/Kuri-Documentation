---
layout: reference
title: WakeUp.srv
package: audio_msgs
category: service-message
tags: 
- wake word
- transcription 
---

## Message Definition
```

---
string state
```

## Request
Request contains no arguments

## Response
#### `state`
Current state of robot audio, eg. `Awake` (listening for voice command), 
`Asleep` (listening for wake word), or `Deaf` (not listening). It is expected 
that Kuri would be `Awake`, or actively transcribing audio after 
``/audio/voice_delegate/wake_up`` is called with this message.

## Related Documentation
``/audio/voice_delegate/wake_up``  
