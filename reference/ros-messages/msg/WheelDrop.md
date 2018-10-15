---
layout: reference
title: WheelDrop.msg
package: mobile_base_driver
category: message
tags: 
- wheel drop
---

## Message Definition
```
# wheel
uint8 RIGHT = 0
uint8 LEFT  = 1

# wheel state
uint8 RAISED  = 0
uint8 DROPPED = 1

uint8 wheel
uint8 state
```

## Arguments
#### `wheel`
```
Right == 0
Left == 1
```

#### `state`
```
Raised == 0
Dropped == 1
```

## Related Documentation
``Sensors.msg``  
