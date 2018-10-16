---
layout: reference
title: clothesline_obstacle_detector
package: obstacle_detector
category: node
tags:
- obstacle detector
---

## Description
This node subscribes to 4 topics and publishes to 1 topic. It is intended to listen to various mobile_base sensors and determine if a potential obstacle unseen by the bump sensors and depth sensor exists.

## Dependencies
- tf2_ros
- std_msgs
- geometry_msgs
- sensor_msgs
- mobile_base_driver

## Subscribed Topics
``/mobile_base/stall``  
``/mobile_base/sensors``  
``/mobile_base/power``  
``/mobile_base/imu``  

## Published Topics
#### `/mobile_base/clothesline_obstacle_detector`
This topic displays messages of the ClotheslineObstacle type. This topic is published to by the node ``clothesline_obstacle_detector`` in the mobile_base package ``obstacle_detector`` and is subscribed to by the experimental may_nav version

## Services
#### `/mobile_base/clothesline_obstacle_seen`
When a request is sent, this service clears the obstacle detector triggers. The only current established client is in the experimental may_nav. The purpose is to ensure that may_nav sees the detected obstacle even if may_nav temporarily stops running when safety triggers are registered.  

## Parameters
``duration``

## Launch File
``clothesline_obstacle_detector.launch``  
