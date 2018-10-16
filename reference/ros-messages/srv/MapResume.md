---
layout: reference
title: MapResume.srv
package: oort_msgs
category: service-message
tags: 
- oort
---

## Message Definition
```
string new_map_loc
geometry_msgs/Pose2D pose
---
```

## Arguments
#### `new_map_loc`
Path where new map will be saved (old map + new extensions).

#### `pose`
Current pose in map loaded to start adding SLAM graph nodes.

## Related Documentation
``/oort_ros_mapping/map/resume``  
