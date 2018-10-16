---
layout: reference
title: obstacle_detector
category: package
tags: 
- obstacle detector
---

## Overview
This package contains one custom message type, ``ClotheslineObstacle``, and one node ``clothesline_obstacle_detector``. This package was created to sort through various sensor data and determine if the robot is potentially stuck at an obstacle that is otherwise undetectable by usual navigational sensors such as the depth sensor and bump sensors. 

## Usage
This package is used to process mobile_base sensor data and publish potential obstacles to which navigation can subscribe. 

## Nodes
``clothesline_obstacle_detector``  

## Messages
``ClotheslineObstacle``  

