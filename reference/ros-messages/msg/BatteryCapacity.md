---
layout: reference
title: BatteryCapacity.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
int16 mAh
int8 pct
int8 rounded_pct # capacity percentage estimate, rounded to the nearest 5 and
                 # subjected to hysteresis so it can only change if the value has
                 # changed by at least 5
```

## Arguments
#### `mAh`
${description}

#### `pct`
${description}

#### `rounded_pct`
${description}

## Related Documentation
``Power.msg``  
 
