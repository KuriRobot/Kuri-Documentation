---
layout: reference
title: Navigate.action
package: may_nav_msgs
category: action-message
tags: 
- ${tag}
- ${tag}
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

## Arguments
#### `${argument}`
${description}

#### `${argument}`
${description}

## Related Documentation
``${name of associated topic}``  
``${name of associated topic}``  


