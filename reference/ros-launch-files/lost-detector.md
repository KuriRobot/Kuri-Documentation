---
layout: reference
title: lost_detector pylaunch
category: launch
tags: 
- lost detector
- amcl
- localization
---

## Launch File Definition
The lost detector is launched using ``pylaunch``, with the config being generated in `gizmo/app/src/app_bringup/gizmo_launch.py`:
```
def lost_detector_launch():
    return [
        pl.Node('gizmo',
                'lost_detector_node',
                'lost_detector',
                respawn=True,
                respawn_delay=2.0)
    ]

```

## ROS Node
``lost_detector``