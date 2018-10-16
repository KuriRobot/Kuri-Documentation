---
layout: reference
title: iris_drive.launch
category: launch
tags: 
- mobile_base
---

## Launch File Definition
```
<!-- 
    This launch file starts the nodes that are necessary to drive Kuri,
    move Kuri's head, and notice/handle safety events.

    The depth-sensor node is required because it is responsible for all
    front cliff safety events

    The mobile base driver controls the wheels, head, and eyes, and integrates
    safety information from the depth sensor, the rear cliff sensors, the
    bump sensor, and the wheel drop sensor
-->

<launch>

    <include file="$(find mobile_base_driver)/launch/includes/robot.launch.xml">
      <arg name="robot_name" value="p3"/>
    </include>

    <rosparam command="load"
              file="$(find joint_state_controller)/joint_state_controller.yaml" />

    <rosparam command="load"
              file="$(find mobile_base_driver)/config/joint_trajectory_controllers.yaml" />

    <rosparam command="load"
              file="$(find mobile_base_driver)/config/mobile_base_controller.yaml" />

    <!-- launch mobile base ros driver -->
    <remap from="mobile_base_controller/cmd_vel" to="mobile_base/commands/velocity" />
    <remap from="mobile_base_controller/odom" to="odom" />
    <include file="$(find mobile_base_driver)/launch/iris_driver.launch">
      <arg name="mobile_base_type" value="p3"/>
    </include>

    <!-- run the depth-sensor too -->
    <include file="$(find depthscan)/launch/depthsensor.launch"/>

</launch>
```
