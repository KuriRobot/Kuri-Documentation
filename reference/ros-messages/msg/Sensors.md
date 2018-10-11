---
layout: reference
title: Sensors.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# sensor state published at a fixed frequency by the driver

Header header

# XXX: sensor indices in their respective arrays does not necessarily
# reflect what sensor it actually represents
# Each of these messages has its own internal field for that purpose.
# Example: check wheeldrop[0].wheel == WheelDrop.RIGHT and do not rely on the 0
Bumper[3]          bumper
WheelDrop[2]       wheeldrop
Touch              touch
```

## Arguments
#### `header`
${description}

#### `bumper`
${description}

#### `wheeldrop`
${description}

#### `touch`
${description}

## Related Documentation
``/mobile_base/sensors``  
