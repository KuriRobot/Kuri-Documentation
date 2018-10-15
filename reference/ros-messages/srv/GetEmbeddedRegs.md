---
layout: reference
title: GetEmbeddedRegs.srv
package: mobile_base_driver
category: service-message
---

## Message Definition
```
uint8 reg
---
uint32 version
string githash
uint32 error

string reg_value
```

## Arguments
#### `reg`
The register number. See the [register number list](/RegisterNumberList.html)
for register numbers.

#### `version`
Defunct, not valid

#### `githash`
The githash of the firmware version

#### `error`
Defunct, not valid
