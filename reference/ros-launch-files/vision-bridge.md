---
layout: reference
title: vision_bridge.launch
category: launch
tags: 
- vision
---

## Launch File Definition
```
<launch>

  <arg name="respawn"		default="true"/>
  <arg name="respawn_delay" default="30"/>
  <arg name="type" 			default="vision_bridge_node"/>
  <arg name="cla" 			default=""/> <!-- Command-line arguments -->
  <arg name="cwd" 			default="ROS_HOME"/>
  <arg name="madmux_socket" default="/var/run/madmux/ch4.sock"/>

  <rosparam command="load"
  			file="$(find vision_bridge)/config/vision_bridge.yaml"
  			ns="vision_bridge"/>
  <rosparam command="load"
  			file="$(find vision_bridge)/config/image_quality.yaml"
  			ns="vision_bridge/image_quality"/>
  <rosparam command="load"
  			file="$(find vision_bridge)/config/face_detector.yaml"
  			ns="vision_bridge/face_detector"/>
  <rosparam command="load"
  			file="$(find vision_bridge)/config/object_detector.yaml"
  			ns="vision_bridge/object_detector"/>
  <rosparam command="load"
        file="$(find vision_bridge)/config/publisher.yaml"
        ns="vision_bridge/publisher"/>
  <param name="vision_bridge/madmux_socket" type="string" value="$(arg madmux_socket)"/>

  <node name="vision_bridge"
  		pkg="vision_bridge"
  		type="$(arg type)"
  		respawn="$(arg respawn)"
  		respawn_delay="$(arg respawn_delay)"
  		args="$(arg cla)"
  		cwd="$(arg cwd)">
  </node>

</launch>
```

## Arguments
#### `respawn`
Boolean for whether to respawn the node.  

#### `respawn_delay`
Seconds to wait before respawn.  

#### `type`
Type (name) of node.  

#### `cla`
Command line arguments to pass to node.  

#### `cwd`
Current working directory.  

#### `madmux_socket`
Path to linux socket where madmux updates frames.  


## ROS Node
``vision_bridge_node``  
