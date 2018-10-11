---
layout: reference
title: SetMap.srv
package:
- gizmo_msgs
- nav_msgs
category: service-message
tags: 
- ${tag}
- ${tag} 
---

## Message Definition
```
[gizmo_msgs/SetMap]:
string uuid
---

[nav_msgs/SetMap]:
# Set a new map together with an initial pose
nav_msgs/OccupancyGrid map
geometry_msgs/PoseWithCovarianceStamped initial_pose
---
bool success
```

## Arguments
#### `uuid`
${description}

#### `map`
${description}

#### `initial_pose`
${description}

#### `success`
${description}

## Related Documentation
``/set_map``  
