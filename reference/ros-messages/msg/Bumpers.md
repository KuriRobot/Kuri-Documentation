---
layout: reference
title: Bumpers.msg
package: gizmo_msgs
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
Header header
mobile_base_driver/Bumper[3] bumper
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc

#### `bumper`
Array of mobile_base_driver Bumper messages for publishing the bump status of the right, middle, and left bumpers

## Related Documentation
``/client_interface/bumpers``  