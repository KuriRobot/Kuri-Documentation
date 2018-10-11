---
layout: reference
title: Bumper.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# Provides a bumper stae

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
#### `bumper`
${description}

#### `state`
${description}

## Related Documentation
``Bumpers.msg``  