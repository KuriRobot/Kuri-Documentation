---
layout: reference
title: may_nav_core
category: package
tags: 
- ${tag}
- ${tag}
---

## Overview
Contains the ROS agnostic libraries for may_nav

## Modules

`bumper_map_updater.hpp`

Updates a cost map with bump information

`cost_function.hpp`

The cost function applied to the distance to obstacles

`geometry.hpp`

Basic geometry types. (e.g. Pose, Velocity, Trajectory)

`goal_correction.hpp`

Algorithms for correcting a goal placed inside an obstacle`

`grid.hpp`

Defines the basic type used to store map information

`laser_map_updater.hpp`

Updates a cost map with laser information

`local_planner.hpp`

Contains the implementation for the DWA local planner

`map.hpp`

Contains operations on multiple maps (e.g. merge_maps)

`nav_modes.hpp`

Defines nav types

`person_follower.hpp`

Defines a variant of the DWA local planner used to follow people. Is currently deprecated

`planner_constraints.hpp`

Generates a grid to bound the global planner to a region around the start pose and goal pose.

`state_machine.hpp`

Manages different modes of the local planner in order to robustly follow a global plan



