---
layout: reference
title: fathom_obstacle_finder
category: node
tags: 
- depth sensor
- obstacle detection
- point cloud
---

## Description
fathom_obstacle_finder takes in a point cloud from the fathom depth sensor 
(/cloud, output by ``depthscan``) and generates /obstacle_cloud, a PointCloud2 
containing only low and high obstacle points that can be fed to ``may_nav`` to 
allow Kuri to avoid low and high obstacles.  

The fathom depth sensor (a PMD time-of-flight sensor array with very custom 
optics) only illuminates in three regions (the horizontal main beam, which we 
ignore in this node, the 30-degrees-up cone for clothesline obstacles, and the 
30-degrees-down cone for low/cliff obstacles).  

This node deals with a few problems with the resulting point cloud, in 
deciding whether points belong to low/high obstacles:
* There is a fair amount of salt-and-pepper-noise that has to be eliminated
* Detecting what points belong to the floor and what points belong to low 
obstacles is somewhat tricky due to multipath issues (light from the main 
beam bouncing off obstacles, hitting the floor, and returning to the sensor) 
and stray light (from reflections both internal and external to the sensor)
* The centers (elevation-wise) of each of the illuminated beams are more 
accurate than the weakly illuminated points at the edges of each beam, which 
often have incorrect/farther-away depth values (also due to multipath and 
stray light)  

Salt-and-pepper-noise is removed by using radius outlier filters (one for 
clothesline points, two for bump points).  

Clothesline/high-obstacle points are then found by taking the nearest point 
in each azimuthal angular bin, of points that are illuminated by the 
upward-facing cone.  

Bump/low-obstacle points are found by picking out points that are a threshold 
above "floor" height for each azimuthal angular bin.  

The height of the floor in each azimuthal angular bin is estimated using the 
nearest point in each bin (out of points that are illuminated by the 
downward-facing cone), with -sensor_height as the max floor height
(the floor and low obstacles often appear sunken into the ground in 
base_footprint frame).  

The result is that Kuri will not see low obstacles that are not taller than 
bump_threshold.  But she will also often not see obstacles that are taller 
than bump_threshold, when she cannot also see the floor in front of the 
obstacle, or at least the front/leading edge of that obstacle.  The idea is 
that hopefully she will have seen the obstacle at some point while driving 
up to it.  

(Unfortunately, if she is then stuck, navigation-wise, she will clear her 
costmaps as a recovery behavior, and if she really wants to drive through a 
low obstacle she can't see the front edge of anymore... she will keep hitting 
it with her bump sensor. Good thing she is small and harmless and adorable.)  

## Dependencies
* pcl_conversions
* pcl_ros
* roscpp
* rospy
* sensor_msgs
* std_msgs  

## Subscribed Topics
``/cloud``  
sensor_msgs::PointCloud2  
The full point cloud from the depth sensor, in the frame of the sensor  

## Published Topics
#### `/obstacle_cloud`  
sensor_msgs::PointCloud2  
Contains low and high obstacle points, to feed to may_nav to allow Kuri 
to avoid bump and clothesline obstacles
#### `/fathom_obstacle_finder/raw_clothesline_points`  
sensor_msgs::PointCloud2  
Just the clothelsine points, for debugging
#### `/fathom_obstacle_finder/raw_floor_points`  
sensor_msgs::PointCloud2  
The height-adjusted "floor" points, for debugging  

## Parameters
The following params are found in 
fathom_cloud_processor/config/fathom_obstacle_finder_params.yaml:  

#### `/fathom_obstacle_finder/sensor_height`  
double, no default  
Height of the sensor off the ground  

#### `/fathom_obstacle_finder/cliff_min_angle`  
double, no default  
Bottom edge of the elevation angle range for cliff points  

#### `/fathom_obstacle_finder/cliff_max_angle`  
double, no default  
Top edge of the elevation angle range for cliff points  

#### `/fathom_obstacle_finder/clothesline_min_angle`  
double, no default  
Bottom edge of the elevation angle range for clothesline points  

#### `/fathom_obstacle_finder/clothesline_max_angle`  
double, no default  
Top edge of the elevation angle range for clothesline points  

#### `/fathom_obstacle_finder/main_beam_height`  
double, no default  
Height of the band used to exclude main-beam points  

#### `/fathom_obstacle_finder/max_cliff_point_dist`  
double, no default  
The max xy distance (from the surface of the robot) of a cliff sensor 
point  

#### `/fathom_obstacle_finder/ground_point_max_z_deviation`  
double, no default  
How far down in z can ground points be? (sensor frame)  

#### `/fathom_obstacle_finder/min_xy_dist`  
double, no default  
x-y distance to crop obstacle points around the sensor  

#### `/fathom_obstacle_finder/x_filter_max`  
double, no default  
Filter out all points farther than this in x  

#### `/fathom_obstacle_finder/x_filter_min`  
double, no default  
Filter out all points closer than this in x  

#### `/fathom_obstacle_finder/y_filter_max`  
double, no default  
Filter out all points higher than this in y  

#### `/fathom_obstacle_finder/y_filter_min`  
double, no default  
Filter out all points lower than this in y  

#### `/fathom_obstacle_finder/z_filter_max`  
double, no default  
Filter out all points higher than this in z  

#### `/fathom_obstacle_finder/z_filter_min`  
double, no default  
Filter out all points lower than this in z  

#### `/fathom_obstacle_finder/bump_threshold`  
double, no default  
Min height of a point above the nearest "ground" point to be a 
bump obstacle  

#### `/fathom_obstacle_finder/radius_outlier_remover_radius`  
double, no default  
Radius outlier remover: radius for noise-filtering raw bump/clothesline 
points  

#### `/fathom_obstacle_finder/radius_outlier_remover_neighbors`  
int, no default  
Radius outlier remover: # of neighboring points required to keep a point  

#### `/fathom_obstacle_finder/bump_2nd_outlier_remover_radius`  
double, no default  
2nd stage radius outlier remover radius for filtering bump points  

#### `/fathom_obstacle_finder/bump_2nd_outlier_remover_neighbors`  
int, no default  
2nd stage radius outlier remover # of neighboring points required  

## Launch File
To run, make sure the depth sensor is running and run the depthscan node to 
generate /cloud (or run a bagfile instead):  

```bash
$rosrun depthscan depthscan
```  

(or make sure gizmo is running, either way)  
and then run  

```bash
$roslaunch fathom_cloud_processor fathom_processing.launch
```  
