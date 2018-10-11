---
layout: reference
title: CompressedOccupancyGrid.msg
package: gizmo_msgs
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# This represents a 2-D grid map, in which each cell represents the probability of
# occupancy.

Header header

#MetaData for the map
nav_msgs/MapMetaData info

# This data is a png8 image file as it appears on disk encoded as a base64 string.
# When uncompressed the pixel array is in row-major order, starting with (0,0).
# Currently, unknown is 205, free is 255, and occupied is 0.
string data
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc

#### `info`
${description}

#### `data`

## Related Documentation
``/client_interface/map``  
