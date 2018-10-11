---
layout: reference
title: GetPlan.srv
package: nav_msgs
category: service-message
tags: 
- ${tag}
- ${tag} 
---

## Message Definition
```
# Get a plan from the current position to the goal Pose 

# The start pose for the plan
geometry_msgs/PoseStamped start

# The final pose of the goal position
geometry_msgs/PoseStamped goal

# If the goal is obstructed, how many meters the planner can 
# relax the constraint in x and y before failing. 
float32 tolerance
---
nav_msgs/Path plan
```

## Arguments
#### `start`
${description}

#### `goal`
${description}

#### `tolerance`
${description}

#### `plan`
${description}

## Related Documentation
``${name of associated service}``  
