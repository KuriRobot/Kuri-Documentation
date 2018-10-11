---
layout: reference
title: PwrBtnLed.srv
package: mobile_base_driver
category: service-message
tags: 
- ${tag}
- ${tag} 
---

## Message Definition
```
# setting the override field to true tell the driver to use the red,
# green and blue field for the status LED. Setting it to false let the
# driver set the LED color based on the power and charging status.

uint8 red
uint8 green
uint8 blue
bool override
---
```

## Arguments
#### `red`
${description}

#### `green`
${description}

#### `blue`
${description}

#### `override`
${description}

## Related Documentation
``/mobile_base/pwr_btn_led``  
