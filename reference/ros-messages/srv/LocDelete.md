---
layout: reference
title: LocDelete.srv
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
bool success
```

## Arguments
#### `nspace`
Namespace that location is in.

#### `id`
ID of location to delete.

#### `success`
Whether Oort found the location and deleted it.

## Related Documentation
``/oort_ros_mapping/graph_loc/delete``  
