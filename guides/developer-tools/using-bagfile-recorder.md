---
layout: guide
title: Using the Bagfile Recorder
category: developer-tools
tags: 
- bagfile_recorder
---

## Goal
The ``bagfile_recorder`` node is a convenience tool for recording reasonably-sized
ROS bagfiles on Kuri. It is running by default but not recording anything. To start
recording bagfiles, just call the ROS service:

```bash
rosservice call /bagfile_recorder/start
```

This will start recording bagfiles with all of the important topics for debugging in simulation.
The bagfiles will appear over time in `/home/mayfield/.gizmo/uploader/bagfiles`.

When you want to stop recording bags, you can call the stop service:

```bash
rosservice call /bagfile_recorder/stop
```

The bagfile recorder will stop automatically if the SD card disk space usage exceeds 50% or if
the the eMMC disk space usage exceeds 80%.
