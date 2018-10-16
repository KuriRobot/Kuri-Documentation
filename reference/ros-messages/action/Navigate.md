---
layout: reference
title: Navigate.action
package: may_nav_msgs
category: action-message
tags: 
- navigation
- path planning
---

## Message Definition
```
byte GO_TO_WAYPOINT=0
byte DRIVE_TO_POINT_IN_IMAGE=1
byte FOLLOW_ME=2

byte nav_type
geometry_msgs/Pose pose
---
---
#State fed back to ios (Controlling, Planning, etc)
string state
#Current state of may_nav's state machine
string state_machine_state

#target pose is the target_pose set by the local planner
geometry_msgs/Pose2D target_pose
geometry_msgs/Pose2D cmd_vel
#has_bumped is set to true when the bump sensor message has been received by may_nav
bool has_bumped
uint32 num_replans
bool replan_failure_occurred
```

## Goal
`nav_type`  
Specifies the navigation mode. 0 is the standard drive to waypoint mode. 1 makes unknown space traversable and bounds the planning to a circular region surrounding the goal and start pose (good for navigating to a point that you can see in the camera image). 2 is a person following mode that is deprecated.  

`pose`  
The goal pose for the navigation request  

## Feedback

`string state`  
State used to update the app  

`string state_machine_state`  
The local planner state machine state  

`geometry_msgs/Pose2D target_pose`  
The local planner's target pose  

`geometry_msgs/Pose2D cmd_vel`  
The last velocity commanded by the local planner  

`bool has_bumped`  
Whether nav processed a bump on the current time step  

`uint32 num_replans`  
The number of times the global planner has replanned  

`bool replan_failure_occurred`  
True if a replan failure occurred on this time step  

## Related Documentation
``/navigate``  



