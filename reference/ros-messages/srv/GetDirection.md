---
layout: reference
title: GetDirection.srv
package: audio_msgs
category: service-message
tags: 
- audio localization
- beam forming 
---

## Message Definition
```
uint8 threshold
uint16 ms_duration
uint16 ms_delay
---
geometry_msgs/Vector3 direction
uint16 relative_angle
```

## Arguments
#### `threshold`
Deprecated (unused)

#### `ms_duration`
The duration (in milliseconds) to use in determining the predominant direction 
vector of detected audio. For example, a value of 500 would request the 
predominant direction that audio has been detected from over the last 500ms.

#### `ms_delay`
Deprecated (unused)

#### `direction`
The direction of the detected audio, expressed as a ``Vector3`` (x, y, z)

#### `relative_angle`
The direction of the detected audio, expressed as an angle, in degrees, 
relative to Kuri's gaze when looking straight ahead

## Related Documentation
``/audio/realtime/get_direction``  
