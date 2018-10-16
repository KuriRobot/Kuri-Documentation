---
layout: reference
title: GetCostMap.srv
package: may_nav_msgs
category: service-message
tags: 
- costmaps
---

## Message Definition
```
bool use_dynamic_map
---
may_nav_msgs/CostMap cost_map

```

## Request
`bool use_dynamic_map`  
Whether to return a costmap incorporating obstacles specified by the dynamic_global_map  

## Response
`may_nav_msgs/CostMap cost_map` (``CostMap.msg``)
Cost map containing the occupancy map with a distance transform applied to it  

## Related Documentation
``/may_nav/get_obstacle_cost_map``  

