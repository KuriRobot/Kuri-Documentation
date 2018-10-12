---
layout: reference
title: gizmo_webrtc_teleop.launch
package: gizmo_webrtc
category: launch
tags:
- webrtc
- kuri live
---

## Launch File Definition
```
<launch>

  <arg name="robot_uuid" />

  <!-- common params -->
  <group ns="/gizmo_webrtc">
    <param name="id" value="$(arg robot_uuid)" />
    <rosparam>
flubnub:
  url: ws://0.0.0.0:9000
  username: flub
  password: nub
  disabled: false
mqtt:
  disabled: false
    </rosparam>
  </group>

  <!-- signaling -->
  <node name="gizmo_webrtc_flubnub" pkg="gizmo_webrtc" type="flubnub" ns="/gizmo_webrtc" respawn="true" respawn_delay="5" />

  <!-- apps -->
  <node name="gizmo_webrtc_teleop" pkg="gizmo_webrtc" type="teleop"
      ns="/gizmo_webrtc" respawn="true" respawn_delay="5" />

</launch>
```

## Arguments
#### `robot_uuid`
The robot unique ID, will be used as the WebRTC channel name.


## ROS Nodes
- ``gizmo_webrtc_teleop``
- ``gizmo_webrtc_flubnub``
