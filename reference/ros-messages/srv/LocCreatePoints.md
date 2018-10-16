---
layout: reference
title: LocCreatePoints.srv
package: oort_msgs
category: service-message
tags: 
- oort
---

## Message Definition
```
string[] nspaces
geometry_msgs/Point[] points
string[] ids
---
```

## Arguments
#### `nspaces`
Namespaces to create each location in points in. For legacy reasons, this
allows each namespace to be different, but for the current Oort version, they
should all be the same.


#### `points`
Array of points (only the x & y component of each point is used).


#### `ids`
Array of ID strings. Can be anything distinctive in this namespace, usually
Gizmo would a UUID for each element here.


## Related Documentation
``/oort_ros_mapping/graph_loc/create_points``  
