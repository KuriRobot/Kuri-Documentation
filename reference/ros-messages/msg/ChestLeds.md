---
layout: reference
title: ChestLeds.msg
package: mobile_base_driver
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# Provide chest LEDs frame
# Index 0 is the center LED
# With 0 degrees straight up increasing clockwise

# Inner ring
# Index 1 : 150 degrees
# Index 2 : 210 degrees
# Index 3 : 270 degrees
# Index 4 : 330 degrees
# Index 5 : 30 degrees
# Index 6 : 90 degrees

# Outter ring
# Index 13 : 22 degrees
# Index 14 : 67 degrees
# Index 7  : 112 degrees
# Index 8  : 157 degrees
# Index 9  : 202 degrees
# Index 10 : 247 degrees
# Index 11 : 292 degrees
# Index 12 : 337 degrees

Led[15]    leds
```

## Arguments
#### `leds`
${description}

## Related Documentation
``/mobile_base/commands/chest_leds``  
