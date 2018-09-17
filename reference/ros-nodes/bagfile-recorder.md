---
layout: reference
title: bagfile_recorder
category: node
tags: 
- bagfile_recorder
---

## Description
The bagfile recorder is a simple ROS node which provides an interface for 
recording rolling-by-size bag files on Kuri and queueing them for upload 
(actual uploading is handled by the ``cloud_uploader_node``).

This node is a better approach for recording ROS topics on Kuri than invoking 
`rosbag record` directly because it:

* contains a hard-coded list of all of the topic names you might want to record
* automatically rolls bag files over after they reach 25mb in size
* automatically stops recording if the disk usage gets too high on the SD 
card or in the uploads directory

Bagfiles roll over every 25mb, accumulating until you exceed either of these 
thresholds:
* 80% disk usage on the eMMC
* 50% disk usage on the SD card

## Dependencies
* `rosbag` (run as a sub-process)
* `rospy`

## Services
#### `bagfile_recorder/start`  
Service to call to start the bagfile recorder (it is off by default).

#### `bagfile_recorder/stop`  
Service to call to stop the bagfile recorder (it is off by default).

## Topics
Does not advertise any topics, but will record all of these:

* ``/joint_states``
* ``/tf``
* ``/odom``
* ``/scan``
* ``/scan_reduced_mapping``
* ``/scan_reduced_nav``
* ``/mobile_base/stall``
* ``/mobile_base/commands/velocity``
* ``/mobile_base/commands/wheel_traj``
* ``/mobile_base/power``
* ``/mobile_base/telescope``
* ``/mobile_base/sensors``
* ``/mobile_base/imu``
* ``/mobile_base/safety_status``
* ``/depthscan/front_cliff``
* ``/depthscan/cliff_cloud``
* ``/diagnostics``
* ``/diagnostics_agg``
* ``/rosout``
* ``/map``
* ``/map_nav``
* ``/tf_static``
* ``/teleop_velocity_smoother/raw_cmd_vel``
* ``/navigate/cancel``
* ``/navigate/feedback``
* ``/navigate/goal``
* ``/navigate/result``
* ``/navigate/status``
* ``/mobile_base/commands/velocity``
* ``/laser_particlecloud``
* ``/global_plan``
* ``/dynamic_global_map``
* ``/dynamic_local_bumper_map``
* ``/dynamic_local_laser_map``
* ``/dynamic_local_merged_map``
* ``/desired_goal``
* ``/cmd_vel_mux/input/navi``
* ``/cmd_vel_mux/input/romoji``
* ``/cmd_vel_mux/input/safety_controller``
* ``/chosen_goal``
* ``/rosout_agg``
* ``/mobile_base/battery_state``
* ``/scored_trajectories``
* ``/mobile_base/safety_status``
* ``/mobile_base/power``
* ``/mobile_base/arc_move/goal``
* ``/mobile_base/arc_move/cancel``
* ``/mobile_base/arc_move/feedback``
* ``/mobile_base/arc_move/result``
* ``/mobile_base/arc_move/status``
* ``/cloud``

