---
layout: reference
title: Awake.msg
package: audio_msgs
category: message
tags: 
- wake word
---

## Message Definition
```
geometry_msgs/Vector3 direction
uint16 relative_angle
float32 score
```

## Arguments
#### `direction`
Vector (x, y, z) to the detected wake word speaker, relative to the direction
Kuri is facing before the wake word is heard

#### `relative_angle`
Angle of detected wake word speaker, relative to the direction Kuri is facing
before the wake word is heard

#### `score`
Confidence score (0.0-1.0) associated with the wake word that triggered Kuri 
to wake up

## Related Documentation
``/audio/voice_delegate/awake``    
