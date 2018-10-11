---
layout: reference
title: CostMap.msg
package: may_nav_msgs
category: message
tags: 
- ${tag}
- ${tag}
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

## Arguments
#### `header`
${description}

#### `info`
${description}

#### `data`
${description}

## Related Documentation
``${name of associated topic}``  
``${name of associated topic}``  
