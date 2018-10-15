---
layout: reference
title: CliffArray.msg
package:
- mobile_base_driver
- depth_sensor_driver
category: message
tags: 
- cliff sensor
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
Array of cliff sensor messages

This can be either the front cliff sensors or the rear cliff sensors. The front cliff sensors are an array of four sensors that come from the depth sensor. The rear cliff sensor is an array of two that comes from the two sensors on the back bottom of the robot.

## Related Documentation
``/depthscan/front_cliff``  
``/mobile_base/rear_cliff``
