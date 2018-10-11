---
layout: reference
title: Stall.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# Motor Stall state published at a fixed frequency by the driver

Header header

# XXX: wheel indices in their respective arrays does not necessarily
# reflect what wheel it actually represents
# Each of these messages has its own internal field for that purpose.
# Example: check motor[0].motor == Motor.RIGHTWHEEL and do not rely on the 0

Motor[5] motor
```

## Arguments
#### `header`
${description}

#### `motor`
${description}

## Related Documentation
``/mobile_base/stall``  
