---
layout: reference
title: depthscan
category: node
tags: 
- depth sensor
- point cloud
- laser scan
---

## Description
depthscan takes in protobuf packets from the fathom depth sensor, and
generates laser scans, point clouds, and cliff messages, to be used in
``may_nav`` (navigation), ``lifelong_mapping`` (SLAM), and
``fathom_obstacle_finder`` (low/high obstacle cloud generation).  

If you activate the depth and/or amplitude images via the ``fathom``
curl-command interface, it will broadcast those as ROS images.  

The node also safety-stops the robot and hard-resets the depth sensor if no
data is seen for 0.5 and 10 seconds, respectively.  

Also, if the depth sensor has not time synced to the high-speed board yet
(incoming data time stamp is more than 1 second away from current time),
the outgoing ROS messages will be stamped with current time - 0.2 secs.  

## Dependencies
* ``mayfield_msgs``
* ``depth_sensor_msgs``
* sensor_msgs

## Published Topics
#### `/scan`  
sensor_msgs::LaserScan  
The laser scan from the depth sensor (created from the main beam portion  
of the point cloud, with "ghost points" from external reflections removed)  
contains 360 readings over 180 degrees (one reading every 0.5 deg)  
#### `/scan_reduced_mapping`  
sensor_msgs::LaserScan  
Same as /scan, but with every other reading removed (one beam every 1 deg)  
used for mapping  
#### `/scan_reduced_nav`  
sensor_msgs::LaserScan  
Same as /scan (published for legacy reasons, used for nav)  
#### `/cloud`  
sensor_msgs::PointCloud2  
The full point cloud from the depth sensor, in the frame of the sensor  
Points are (x,y,z)
#### `/depthscan/depth_image`  
sensor_msgs::Image  
If activated via curl commands on the robot, the sensor's depth image  
#### `/depthscan/amplitude_image`  
sensor_msgs::Image  
If activated via curl commands on the robot, the sensor's amplitude image  
#### `/depthscan/front_cliff`  
depth_sensor_msgs::CliffArray  
Readings from the front "cliff sensors," generated on the sensor
from the low/cliff beam's point cloud (for feeding to ``may_nav``)  
#### `/depthscan/cliff_cloud`  
sensor_msgs::PointCloud2  
For debugging, the portion of the cloud used in cliff detection  
#### `/depthscan/active`  
std_msgs::Bool  
If the depth sensor stops responding for 0.5 seconds, goes false to stop
the robot from driving (safety check)  
#### `/node_online`  
mayfield_msgs::NodeStatus  
Latched node status publisher that goes true when it gets the first
message, just for making startup order predictable  

## Service Calls
``/mobile_base/depth_sensor_reset``  
std_srvs::Empty  
Used to hard-reset the depth sensor, if no data is seen for 10 seconds  

## Parameters

#### `/depthscan/replay_file`  
Used to broadcast ROS topics based on a saved protobuf file
#### `/depthscan/time_between_cliff_msgs`  
double, default 0.4
Only broadcast cliff messages if something changes, or every
time_between_cliff_msgs secs
#### `/depthscan/ignore_cliff_count`
int, default 0 (but default-set to 1 in depthsensor.launch's args)
Number of (potentially false-positive) cliffs to ignore before
broadcasting on /depthscan/front_cliff

## Launch File
``depthsensor.launch``  
