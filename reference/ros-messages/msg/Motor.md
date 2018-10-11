---
layout: reference
title: Motor.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
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
${description}

#### `pushed`
${description}

## Related Documentation
``Stall.msg``  
