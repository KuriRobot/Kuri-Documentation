---
layout: reference
title: vision_bridge
category: node
tags: 
- vision
---

## Description
The vision_bridge node recieves image frames from the camera through either madmux or a ros published topic (depending on the content of the madmux_socket parameter). It then processes them through modules with options for frame rate, resolution, and prioritization. The modules include face detection and tracking, general object detection and simple quality metrics.

## Dependencies
- opencv
- madmux (our camera client)
- module specific dependencies include caffe opencl, libfaceit, libdetectit

## Action API
### Action Subscribed Topics
None

### Action Published Topics
None

## Subscribed Topics
#### `joint_states`
#### `upward_looking_camera_link`
Topic for Image messages, if not using madmux (sockets).
#### `vision/captured`
vision_msgs::ImageClustering
Feedback for moment capture used to track capture of similar moments.

## Published Topics
#### `vision/results`
    vision_msgs::VisionResults
    Combined vision module results for a processed frame.

## Services
#### `/cmds`
vision_msgs::VisionCmdMsg
Interface for managing vision modules. This is the runtime interface for managing which modules are running and their configuration. As there are significant performance consequences to running the neural network based detectors, managing when they are active and their framerate (along with other configuration) is needed.
- Usage: 
``rosservice call /vision/cmds '[["activate", "face_detector", ["fps": 6], ["skip_ratio", 3]]]'``
#### `/get_config`
vision_msgs::VisionQuery
Request vision bridge related configuration for a module. These govern how the vision bridge manages the module. 
- Modules are aligned by fps such that modules with the same fps, or whos fps a factor of another are garaunteed to run upon the same frames. This is useful when you want to use the output of multiple modules. This and priority is useful if a module is dependent upon the output of another.
- Includes:
    + fps: Max frames per second for module
    + priority: Integer priority level of module (1 is highest)
    + width: resolution width
    + height: resolution height
#### `/get_params`
vision_msgs::VisionQuery
Request module specific parameters. The parameters returned by this service call are those which are changeable at runtime. For a full listing and description of parameters, see the module's config yaml file.
#### `/active_modules`
vision_msgs::VisionQuery
Service that provides a list of currently active vision modules. This is useful for testing or if multiple clients are managing modules.

## Service Calls
None

## Parameters
- Module specific parameters described in vision_bridge/config/<module name>.yaml files.
#### `madmux_socket`  
Path to linux socket provided by madmux
#### `optical_camera_frame` 
Deprecated
#### `camera_frame`  
Image topic  
#### `results_pub_topic` 
Topic aggregating results from all vision modules for each processed frame
#### `fps` 
Max fps for any module  
#### `resolution` 
Root resolution to resize incoming frames  
#### `available_modules` 
List of available vision modules
#### `joints_sub_topic` 
Joints topic used to block processing when eyes are too closed
#### `eyelid_position_max` 
Maximum value for eyelid joint state to allow before blocking processing

## Launch File
#### `vision_bridge.launch`