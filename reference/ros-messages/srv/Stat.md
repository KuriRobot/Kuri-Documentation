---
layout: reference
title: Stat.srv
package: audio_msgs
category: service-message
---

## Message Definition
```

---
string state
string direction
```

## Arguments
#### `state`
Current state of robot audio, eg. `Awake` (listening for voice command), 
`Asleep` (listening for wake word), or `Deaf` (not listening)

#### `direction`
Vector (x, y, z) to sound heard over the last 1 second, relative to the 
direction Kuri is facing at the start of the 1 second period

## Related Documentation
``/audio/voice_delegate/stat``  
