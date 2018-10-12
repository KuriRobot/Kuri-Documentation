---
layout: reference
title: CostMap.msg
package: may_nav_msgs
category: message
tags: 
- costmaps
---

## Message Definition
```
# This represents a 2-D cost map, in which each
# cell represents the cost of each position
# as a float

Header header

# MetaData for the map
nav_msgs/MapMetaData info

# The cost map data, in row-major order, starting with (0,0).
# The costs are represented as floats from [0, inf)
float64[] data

```

This message is the same as `nav_msgs/OccupancyGrid.msg` except the `data` field is composed of `float64` instead of `uint8`

## Arguments
`header`  
Normal ROS header containing the frame and stamp for the costmap

`info`  
Metadata for the map

`data`  
The cost map data, in row-major order, starting with (0,0).
The costs are represented as floats from [0, inf)

## Related Documentation
``GetCostMap.srv``  

