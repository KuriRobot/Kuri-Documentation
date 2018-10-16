---
layout: reference
title: Snooze.srv
package: audio_msgs
category: service-message
tags:
- wake word
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
that Kuri would report a state of `Asleep` and be actively listening for the 
wake word after ``/audio/voice_delegate/snooze``is called with this message.

## Related Documentation
``/audio/voice_delegate/snooze``  
