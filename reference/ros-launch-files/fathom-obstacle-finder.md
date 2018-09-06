---
layout: reference
title: fathom_obstacle_finder.launch
category: launch
tags: 
- depth sensor
- obstacle detection
- point cloud
---

## Launch File Definition
```
<launch>
  <arg name="map_yaml" default=""/>
  <arg name="bagfile" default="false"/>
  <arg name="map_server" default="false"/>

  <node pkg="fathom_cloud_processor"
        type="fathom_obstacle_finder"
        name="fathom_obstacle_finder"
        respawn="true" respawn_delay="10" >
    <rosparam file="$(find fathom_cloud_processor)/config/fathom_obstacle_finder_params.yaml" command="load"/>
  </node>

  <node if="$(arg map_server)" pkg="map_server" type="map_server" name="map_server" args="$(arg map_yaml)"/>
  <include if="$(arg bagfile)" file="$(find may_nav_ros)/launch/may_nav_ros.launch"/>

</launch>
```

## Arguments
#### `map_server`
If true, runs a map_server node to latched-publish the map given in map_yaml

#### `bagfile`
If true, launches may_nav so you can see the costmaps that result from
any changes you make to the fathom cloud processor

#### `map_yaml`
Only used if map_server is true, to feed in the location of the map yaml file.

## ROS Node
``fathom_obstacle_finder``