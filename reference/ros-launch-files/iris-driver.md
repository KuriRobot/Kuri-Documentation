---
layout: reference
title: iris_driver.launch
category: launch
tags: 
- mobile_base
---

## Launch File Definition
```
<launch>
<!--
    ns                  rosparams from this node will live in this namespace.
    name                name that the node will take on (overrides value
                        set in the executable ros::init(..)).
    pkg                 package from which desired node to launch comes from.
    type                the name of the executable to run.
    output (optional)   redirect std::cout to the terminal window.
-->

  <rosparam
        command="load"
        ns="mobile_base"
        file="$(find mobile_base_driver)/config/iris_common.yaml"
  />

  <arg name="mobile_base_type" default="p0b" />

  <rosparam
        command="load"
        ns="mobile_base"
        file="$(find mobile_base_driver)/config/$(arg mobile_base_type).yaml"
  />

  <node
         name="mobile_base"
         pkg="mobile_base_driver"
         type="iris_driver"
         respawn="true"
         respawn_delay="10">

        <remap
                from="mobile_base/diagnostics"
                to="/diagnostics"/>

  </node>

  <node
         name="mobile_base"
         pkg="mobile_base_driver"
         type="lp_off.py"
         respawn="false">

  </node>

</launch>
```

## Arguments
#### `mobile_base_type`
Must be set to "p3"

## ROS Node
``mobile_base``
