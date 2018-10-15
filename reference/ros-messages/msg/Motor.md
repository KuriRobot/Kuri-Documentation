---
layout: reference
title: Motor.msg
package: mobile_base_driver
category: message
tags: 
- head
- eyes
- wheels
---

## Message Definition
```
# Provides a motor state

# motor
uint8 RIGHTWHEEL     = 0
uint8 LEFTWHEEL      = 1
uint8 PAN            = 2
uint8 TILT           = 3
uint8 EYES           = 4

bool  stalled
bool  pushed
```

## Arguments
#### `stalled`
True if this motor is stalled. The motor controller can not achieve the requested velocity within a small period of time.

#### `pushed`
True if this motor being pushed. This indicates the motor is moving when no velocity is being commanded.

## Related Documentation
``Stall.msg``  
