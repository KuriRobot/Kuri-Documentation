---
layout: reference
title: gizmo
category: node
tags: 
- ${tag}
- ${tag}
- ${tag}
---

## Description
Gizmo is not a ROS node.  It is the top level executable that starts the ROS master as well 
as all of the other nodes that control Kuri.

Gizmo dynamically creates the launch configuration using a propriatary ROS launch wrapper
called pylaunch.  Some nodes configurations can be edited because they have their owh include
file, but some node configurations can not be changed because their configuration is hard-coded
in python.

For example, the ROS beat detection is launched via `rosbeat.launch` in the ros_beat package

```
def ros_beat_launch():
    return pl.Include('ros_beat', 'rosbeat.launch')

```

This allows rosbeat to be configured by editing the launch file.

Other nodes are hard-coded.  For example, oort (lifelong mapping) does not have a launch
file and has a hard-coded launch_prefix:

```
    c = []
    c.append(pl.Node('oort', 'oort_ros', 'oort_ros_mapping',
                     launch_prefix="nice -n 10",
                     remaps=[('scan', map_topic)],
                     respawn=True,
                     respawn_delay=10))
```
