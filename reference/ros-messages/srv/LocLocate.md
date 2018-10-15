---
layout: reference
title: LocLocate.srv
package: oort_msgs
category: service-message
tags: 
- oort
---

## Message Definition
```
string nspace
string id
---
geometry_msgs/PoseStamped pose
```

## Arguments
#### `nspace`
Namespace that location exists in.

#### `id`
ID string of location to locate.

#### `pose`
The location's current pose according to SLAM graph.

## Related Documentation
``/oort_ros_mapping/graph_loc/locate``  
