---
layout: reference
title: SafetyOverride.srv
package: mobile_base_driver
category: service-message
tags: 
- cliff
- bump
- wheel
---

## Message Definition
```
SafetyStatus override
---
```

## Arguments
#### `override`
Bits in the SafetyStatus to override.

A 1 in the bit position causes that safety event to be ignored. For example, if you set the rear cliff bits to 1 you will be able to drive backward off the stairs.
