---
layout: reference
title: LocNamespace.srv
package: oort_msgs
category: service-message
tags: 
- oort
---

## Message Definition
```
string nspace
bool use_as_prefix
---
string[] nspaces
string[] ids
```

## Arguments
#### `nspace`
Namespace of location (or a prefix).

#### `use_as_prefix`
Use the `nspace` argument as a prefix to perform search. If false, only exact
matches to `nspace` will be listed.

#### `nspaces`
Array of actual namespaces matched, one for each ID in `ids`.

#### `ids`
Array of matched location IDs.

## Related Documentation
``/oort_ros_mapping/graph_loc/clear``  
``/oort_ros_mapping/graph_loc/list``  
