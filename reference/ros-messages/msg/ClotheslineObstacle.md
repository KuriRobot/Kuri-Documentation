---
layout: reference
title: ClotheslineObstacle.msg
package: obstacle_detector
category: message
tags: 
- imu
- may_nav
- navigation
- motor stall
- tilt
- wheel drop
---

## Message Definition
```
Header header

bool obstacle_detected
uint32 tilt_count
uint32 wheeldrop_count
uint32 stall_count
float32 current_tilt
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc
#### `obstacle_detected`
Boolean that is set the true only if the obstacle detector determines likelihood of an obstacle existing in the current location
#### `tilt_count`
Number of times the robot z-axis has tilted more than some threshold amount according to the IMU within some recent duration. These are counted toward determining obstacle existence
#### `wheeldrop_count`
Number of times the drive wheels registered a drop (wheels are off the ground) within the recent duration. These are also counted toward determining obstacle existence
#### `stall_count`
Number of times the drive motors have stalled within the recent duration for the obstacle detector to count toward obstacle determination.
#### `current_tilt`
The calculated deviation of the robot's z-axis (IMU frame) compared to the nominal IMU frame

## Related Documentation
``/mobile_base/clothesline_obstacle_detector``  
