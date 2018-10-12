---
layout: reference
title: may_nav_ros
category: package
tags: 
- navigation
- path planning
- costmaps
---

## Overview
Contains the ROS-dependent libraries for may_nav as well as the main navigation node

## Nodes
``may-nav``

Launch using ``may_nav.launch``

## Modules

`costmap.h` 

Converts sensor callback data into a cost map

`geometry.hpp`

Convert between ROS and may_nav geometry types

`global_planner.hpp`

Implements an asynchronous wrapper for the global planner.

`local_planner.hpp`

Create debug data for the local planner

`map.hpp`

Convert between ROS and may_nav map types

`map_manager.hpp`

Manages the usage of externally provided data (tf, map, sensors) to create the set of cost maps and transforms needed for global and local planning.

`message_buffer.hpp`

Wrapper for callbacks to ROS subscribers to buffer messages till they are needed by a map manager update call.

`navigation_action_server.hpp` 

Implementation of the main action server that runs navigation

`state_manager.hpp`

Protect may_nav's internal state from race conditions between action server and service calls

`tf_interface.hpp`

Wrapper for the ROS tf




