---
layout: reference
title: robot_parameters_node.launch
category: launch
tags: 
- parameters
---

## Launch File Definition
```
<launch>

  <arg name="respawn" default="True"/>
  <!-- Use the integration test local-hosted S3, and fake creds -->
  <arg name="local_s3" default="False"/>

  <param name="robot_parameters_node/local_s3" value="$(arg local_s3)"/>
  <node name="robot_parameters_node"
        pkg="gizmo"
        type="robot_parameters_node"
        respawn="$(arg respawn)"
        respawn_delay="10"/>
</launch>

```

## Arguments
#### `respawn`
Whether to respawn the parameter node when it dies

#### `local_s3`
Use fake S3 (local instead of cloud storage)

## ROS Node
``robot_parameters_node``