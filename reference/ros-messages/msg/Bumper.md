---
layout: reference
title: Bumper.msg
package: mobile_base_driver
category: message
tags: 
- bumper
---

## Message Definition
```
# Provides a bumper state

# bumper
uint8 RIGHT     = 0
uint8 CENTER    = 1
uint8 LEFT      = 2

# bumper state
uint8 RELEASED = 0
uint8 PRESSED = 1

uint8 bumper
uint8 state
```

## Arguments
#### `bumper
```
RIGHT     = 0
CENTER    = 1
LEFT      = 2
```

#### `state`
```
RELEASED = 0
PRESSED = 1
```

## Related Documentation
``Bumpers.msg``  
