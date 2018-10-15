---
layout: reference
title: LocCreate.srv
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
```

## Arguments
#### `nspace`
Namespace to create the location in. Note that `dock` is a reserved namespace.

#### `id`
An ID string. Can be anything distinctive in this namespace, usually Gizmo
would a UUID here.

## Related Documentation
``/oort_ros_mapping/graph_loc/create``  
