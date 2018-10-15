---
layout: reference
title: Stall.msg
package: mobile_base_driver
category: message
tags: 
- motor
- stall
---

## Message Definition
```
# Motor Stall state published at a fixed frequency by the driver

Header header

# XXX: wheel indices in their respective arrays does not necessarily
# reflect what wheel it actually represents
# Each of these messages has its own internal field for that purpose.
# Example: check motor[0].motor == Motor.RIGHTWHEEL and do not rely on the 0

Motor[5] motor
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc

#### `motor`
Array of the motor messages for the five robot motors.

## Related Documentation
``/mobile_base/stall``  
