---
layout: reference
title: clothesline_obstacle_detector.launch
package: obstacle_detector
category: launch
tags: 
- obstacle detector
---

## Launch File Definition
```
<launch>

  <arg name="coverage" default="false"/>

  <node name="clothesline_obstacle_detector"
        pkg="obstacle_detector"
        type="clothesline_obstacle_detector"
        respawn="true"
        unless="$(arg coverage)">
  </node>

  <node name="clothesline_obstacle_detector"
        pkg="obstacle_detector"
        type="clothesline_obstacle_detector_cov"
        respawn="true"
        if="$(arg coverage)">
        <param name="duration" type="double" value="3"/>
  </node>

</launch>

```

## Arguments
#### `coverage`
for distinguising testing verses normal operation of the node


## Parameters
#### `duration`
For shortening the duration over which the obstacle_detector looks at triggers (wheeldrop, tilt, and motor stall) during testing to make tests run faster

## ROS Node
``clothesline_obstacle_detector``