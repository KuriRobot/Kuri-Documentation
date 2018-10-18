---
layout: reference
title: mayvision_py
category: package
tags: 
- vision
---

## Overview
This package primarily contains the Vision python object which is the interface between the vision_bridge_node and gizmo_brain, as well as logic and data structures for analyzing vision results.

The interface to the vision_bridge_node provides conveniencies for managing vision modules as well as parsing FrameResults messages. The object also contains a buffer of processed frame results and methods for operating upon it for moment related functions. This includes scoring and threshold checks for deciding when to start capture and whether to upload or discard a moment.

## Usage
The interface with the vision_bridge_node is through ros communication methods. This includes:
- Subscription to ``/vision/results`` to recieve FrameResults messages.
- Publisher to ``/vision/captured``. This signals that a moment was captured for tracking visual similarity.
- It also has several service proxies used to manage the vision modules using VisionCmdMsg.

It communicates with gizmo_brain through methods on the python object. The primary points of interest are:
#### Vision module management:
##### `.req_mods("<requestor_tag>", [<requested_module_states>])`
- `<requestor_tag>` is a string tag to uniqely identify the requestor which is used to update or clear requests.
- `<requested_module_states>` is the same structure as the VisionCmdMsg, eg:
```
[["activate", "face_detector", {"fps": 6}, {}],
 [deactivate", "object_detector", {}, {}]]
```
- You can clear a request by passing the tag again with empty list for the states to req_mods.
- Priority is given to deactivation, then to most recent request.

#### Featurized results buffer:
##### `._results_buffer`
- Recent processed FrameResults with calculated features of interest to moments and interaction (single frame features).
##### `.get_moment_features(start_time, stop_time)`
- Gather and calculate moment features for a time window (within the results_buffer). The calculated stats are used for moment selection.

## Nodes
It is instantiated within gizmo_brain and communicates with the vision_bridge_node.

