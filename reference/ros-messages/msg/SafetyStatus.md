---
layout: reference
title: SafetyStatus.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# bit positions, same as in iris_comm
int8 HB_bp   = 0        # Heartbeat
int8 CFHW_bp = 1      # Cliff to Motor Control HW
int8 CF0_bp  = 2      # Cliff 0
int8 CF1_bp  = 3      # Cliff 1
int8 CF2_bp  = 4      # Cliff 2
int8 CF3_bp  = 5      # Cliff 3
int8 CF4_bp  = 6      # Cliff 4
int8 CF5_bp  = 7      # Cliff 5
int8 DP_bp  = 8     # Drop Right and Left
int8 BPR_bp  = 10     # Bump Right
int8 BPM_bp  = 11     # Bump Middle
int8 BPL_bp  = 12     # Bump Left
int8 CLL_bp  = 13     # Clothesline

uint32 status
```

## Arguments
#### `status`
${description}

## Related Documentation
``/mobile_base/safety_status``  
