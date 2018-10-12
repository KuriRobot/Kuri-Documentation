---
layout: reference
title: ScoredTrajectories.msg
package: may_nav_msgs
category: message
tags: 
- navigation
- path planning
---

## Message Definition
```
may_nav_msgs/Trajectory[] trajectories
float32[] scores
float32[] plan_distance_scores
float32[] target_distance_scores
float32[] plan_angle_difference_scores
float32[] target_angle_difference_scores
float32[] obstacle_scores
float32[] heading_angle_difference_scores
int32 chosen_trajectory_index
```

Scored trajectories with component breakdown. See may-nav node documentation (``may_nav``) for details on scoring.

## Arguments
`trajectories`  
Array of trajectories considered  

`scores`  
Final scores for each trajectory  

`plan_distance_scores`  
Scores related to the distance to the global plan  

`target_distance_scores`  
Scores related to the distance to the target pose on the global plan  

`plan_angle_difference_scores`  
Scores related to the difference in orientation from the target pose  

`target_angle_difference_scores`  
Scores related to how far the robot is from being pointed at the target pose  

`obstacle_scores`  
Scores related to distances from obstacles  

`heading_angle_difference_scores`  
Scores related to the difference between the robot heading and the plan heading  

`chosen_trajectory_index`  
Which trajectory had the highest score  

## Related Documentation
``/rotating_to_global_plan/trajectories/scored_trajectories``
``/following_global_plan/trajectories/scored_trajectories``