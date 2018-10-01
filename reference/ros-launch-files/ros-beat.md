---
layout: reference
title: ros_beat.launch
category: launch
tags: 
- ros_beat
- dance
---

## Launch File Definition
```
<launch>

  <!-- Usage: roslaunch ros_beat ros_beat [source:=name-of-source] -->

  <!-- Set this at the command line to launch a node that listens to a different source. -->
  <arg name="source" default="alsa_output.default.monitor" />

  <!-- Launch the node. -->
  <node pkg="ros_beat" type="ros_beat" name="ros_beat" respawn="true" respawn_delay="10">

    <!-- Load parameters for this node. -->
    <rosparam command="load" file="$(find ros_beat)/params/params.yaml" />

    <!-- Get the command line source parameter. -->
    <param name="pulse_source" type="string" value="$(arg source)" />

  </node>
</launch>
```

## ROS Node
``ros_beat``
