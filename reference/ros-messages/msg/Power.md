---
layout: reference
title: Power.msg
package: mobile_base_driver
category: message
tags: 
- battery
- dock
- charging
- power button
---

## Message Definition
```
uint16[] adc_channels
float32 v_dock
float32 v_batt
float32 i_batt
float32 t_batt
bool dock_present
bool is_charging
bool power_button_pressed
BatteryCapacity battery
```

## Arguments
#### `adc_channels`
The raw values from the ADC sensors for the power sensors

#### `v_dock`
The dock voltage, only valid while on the dock

#### `v_batt`
The battery voltage

#### `i_batt`
The current to/from the battery.

#### `t_batt`
Temperature of the battery

#### `dock_present`
True if connected to the dock and the dock is providing power.

#### `is_charging`
True is the batteryis charging.

#### `power_button_pressed`
True if the button on the back of the robot is being pressed.

#### `battery`
See the BatteryCapacity reference.

## Related Documentation
``BatteryCapacity.msg``  
``/mobile_base/power``  
