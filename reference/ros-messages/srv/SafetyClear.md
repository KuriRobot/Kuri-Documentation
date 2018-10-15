---
layout: reference
title: SafetyClear.srv
package: mobile_base_driver
category: service-message
tags: 
- cliff
- bump
- wheel
---

## Message Definition
```
SafetyStatus clear
---
```

## Arguments
#### `clear`
The bits in the safety status message to clear.

Note: The safety status is latched this clears it if and only if the underlying condition isn't true anymore.
