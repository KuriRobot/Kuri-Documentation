---
layout: reference
title: may_nav.launch
category: launch
tags: 
- navigation
- path planning
- costmaps
---

## Launch File Definition
Launch file can be found at `/opt/gizmo/share/may_nav_ros/launch/may_nav_ros.launch`  
```
<launch>
  <arg name="robot_name" default="alpha"/>

  <node pkg="may_nav_ros" type="nav" name="may_nav" respawn="true" output="screen">
     <remap from="cmd_vel" to="cmd_vel_mux/input/navi"/>
     <remap from="bump_cloud" to="mobile_base/sensors/bumper_pointcloud"/>
     <remap from="scan" to="scan_reduced_nav"/>
     <rosparam file="$(find may_nav_ros)/config/local_planner_params_$(arg robot_name).yaml" command="load" ns="local_planner"/>
     <rosparam file="$(find may_nav_ros)/config/global_planner_params_$(arg robot_name).yaml" command="load" ns="global_planner"/>
     <rosparam file="$(find may_nav_ros)/config/local_map_params_$(arg robot_name).yaml" command="load" ns="local_map"/>
  </node>

</launch>

```

## Arguments
`robot_name`
For the final Kuri, this should be "p3-ds".

## ROS Node
``may_nav``