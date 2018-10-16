---
layout: reference
title: SafetyStatus.msg
package: mobile_base_driver
category: message
tags: 
- cliff
- bump
- wheel
---

## Message Definition
```
uint32 status
```

## Arguments
#### `status`
Bit map of the safety statuses.


| Bit positions | Description |
| ----------- | ----------- |
|HB_bp   = 0| Heartbeat|
|CFHW_bp = 1| Cliff to Motor Control HW|
|CF0_bp  = 2| Cliff 0|
|CF1_bp  = 3| Cliff 1|
|CF2_bp  = 4| Cliff 2|
|CF3_bp  = 5| Cliff 3|
|CF4_bp  = 6| Cliff 4|
|CF5_bp  = 7| Cliff 5|
|DP_bp  = 8| Drop Right and Left|
|BPR_bp  = 10| Bump Right|
|BPM_bp  = 11| Bump Middle|
|BPL_bp  = 12| Bump Left|

## Related Documentation
``/mobile_base/safety_status``  
