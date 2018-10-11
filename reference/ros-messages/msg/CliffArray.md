---
layout: reference
title: CliffArray.msg
package:
- mobile_base_driver
- depth_sensor_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
Header header

# XXX: sensor indices in their respective arrays does not necessarily
# reflect what sensor it actually represents
# Each of these messages has its own internal field for that purpose.
# Example: check wheeldrop[0].wheel == WheelDrop.RIGHT and do not rely on the 0
CliffSensor[] cliff
```

## Arguments
#### `header`
${description}

#### `cliff`
${description}

## Related Documentation
``/depthscan/front_cliff``  
``/mobile_base/rear_cliff``