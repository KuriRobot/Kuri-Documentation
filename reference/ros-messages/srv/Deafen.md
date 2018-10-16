---
layout: reference
title: Deafen.srv
category: service-message
tags: 
- wake word
- deaf
- disable listening
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
that Kuri would be `Deaf`, or not listening for wake words or voice commands 
after ``/audio/voice_delegate/deafen`` is called with this message.

## Related Documentation
``/audio/voice_delegate/deafen``  
