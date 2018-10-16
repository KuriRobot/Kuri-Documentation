---
layout: reference
title: depthsensor.launch
category: launch
tags: 
- depth sensor
- cliff sensor
- laser scan
- point cloud
---

## Launch File Definition
```
<!--
Starts the Mayfield depth sensor bridge
-->

<launch>
  <arg name="replay_file" default=""/>
  <arg name="ignore_cliff_count" default="1"/>

  <node name="depthscan" pkg="depthscan" type="depthscan" respawn="true" respawn_delay="5">
    <param name="replay_file" value="$(arg replay_file)"/>
    <param name="ignore_cliff_count" value="$(arg ignore_cliff_count)"/>
  </node>

</launch>

```

## Arguments
#### `replay_file`
Used to feed in saved protobuf files

#### `ignore_cliff_count`
Number of (potentially false-positive) cliffs to ignore before
broadcasting on /depthscan/front_cliff

## ROS Node
``depthscan``