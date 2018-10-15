---
layout: reference
title: Sensors.msg
package: mobile_base_driver
category: message
tags:
- bumper
- touch
- wheel drop 
---

## Message Definition
```
Header header

# XXX: sensor indices in their respective arrays does not necessarily
# reflect what sensor it actually represents
# Each of these messages has its own internal field for that purpose.
# Example: check wheeldrop[0].wheel == WheelDrop.RIGHT and do not rely on the 0
Bumper[3]          bumper
WheelDrop[2]       wheeldrop
Touch              touch
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc

#### `bumper`
Array of bumper messages with the state of the three bumper sensors.

#### `wheeldrop`
Array of wheeldrop messages with the state of the wheel drop sensors. There is really only one wheeldrop and these will always have the same state.

#### `touch`
The cap touch message showing the state of the cap touch sensor.

## Related Documentation
``/mobile_base/sensors``  
