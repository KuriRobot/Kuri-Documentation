---
layout: reference
title: GPIO pins
tags: 
- gpio
---

## List of GPIO pins

These GPIOs are accessible through their kernel interface in `/sys/class/gpio/gpioXXX`.
For more information on how to use that interface, see Linux documentation:
https://www.kernel.org/doc/Documentation/gpio/gpio.txt

|Name|Kernel number|Direction|Polarity|Description|
|----|------|----|----|-----|
|VOL_UP|404|in|active low|volume up button|
|VOL_DOWN|402|in|active low|volume down button|
|HEAD_nRESET|385|out|active high|set to low to reset head board|
|LS_nRESET|392|out|active high|set to low to reset low speed board|
|CHEST_nRESET|394|out|active high|set to low to reset volume board|
|WIFI_nRESET|401|out|active high|set to low to reset wifi chip|
|AUDIO_nRESET|405|out|active high|set to low to reset audio chip|
|HEAD_GPIO_CPU|386|in/out|N/A|extra GPIO to the head board|
|LS_GPIO_CPU|391|in/out|N/A|extra GPIO to the low speed board|
|STAY_ON_CPU|388|out|active high|pull high when flashing the low speed board to maintain power|

