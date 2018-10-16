---
layout: reference
title: ArcMove.action
package: mobile_base_driver
category: action-message
tags: 
- wheels
- mobile base
---

Note: This message is deprecated and no longer used in any Kuri software other than tests.

## Message Definition
```
# goal
float32 arc_len
float32 linear_velocity
float32 angle
float32 angular_velocity
float32 duration
---
# result
---
# feedback
```

## Arguments
#### `arc_len`
arc_length of the curve we want
the robot to traverse in meters

#### `linear_velocity`
velocity we want the robot to traverse the arc

#### `angle`
(radians) a positive angle means a counter-clockwise
rotation. Can rotate full turns and more.

#### `angular_velocity`
a velocity to rotate at

#### `duration`
a maximum duration to rotate for

## Related Documentation
``mobile_base/arc_move``
