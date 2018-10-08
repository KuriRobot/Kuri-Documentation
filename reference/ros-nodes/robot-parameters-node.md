---
layout: reference
title: robot_parameters_node
category: node
tags: 
- configuration
---

## Description
This node downloads new per-user parameters from the cloud and stores them
to disk. The disk store can be directly manipulated in a no-cloud scenario.

## Subscribed Topics
``/mqtt/incoming``

``/mqtt/online``

``/mqtt/connected``

MQTT is used to notify the node that new parameters are available from the cloud

## Published Topics
### `/voice_commands/update`
Used by IFTTT custom commands to forward the list of voice commands

## Launch File
``robot_parameters_node.launch``  

Has a `respawn` argument that controls if the node respawns. The `local_s3` argument is only useful with the proprietary integration test framework.

## User Parameters
User parameters are stored in the file `/mayfield/data/user/robot_parameters.json` which is a dictionary.

The following settings can be used to modify robot behavior:

* `usersetting_enableDanceOnDemand` boolean setting for whether Kuri will dance to music played over Bluetooth.
* `usersetting_moment_min_face_size` integer setting representing the minimum number of pixels in a face to trigger moment capture.
* `usersetting_moment_min_pet_size` integer setting representing the minimum number of pixels int a pet to trigger moment capture.
* `usersetting_similar_subject_distance_max`, `usersetting_similar_subject_rotation_max`, `usersetting_similar_subject_extent_ratio_max` float settings controlling similar moment filtering.
* `usersetting_moment_min_brightness`, `usersetting_moment_min_sharpness` float settings for the minimum image quality of a captured moment
* `usersetting_moment_min_detection_count`, `usersetting_moment_min_detection_extent` float settings for how long the subject of a moment must be in frame to capture and how much of the frame it must occupy.
* `usersetting_moment_max_similar` integer setting for how many moments similar to existing moments Kuri will capture, so 1 means it will take 1 additional similar moment after the first.
