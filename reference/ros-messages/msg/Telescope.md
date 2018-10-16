---
layout: reference
title: Telescope.msg
package: mobile_base_driver
category: message
tags: 
- docking
---

## Message Definition
```
Header header
bool front_noise
bool front_left
bool front_right
bool front_middle
bool back_noise
bool back_left
bool back_right
bool back_middle
```

## Arguments
#### `header`
Header type from std_msgs, contains time stamp, frame id, etc

#### `front_noise`
The front sensor sees any LED signal the frequency band used by the dock. Note, this will be true whether or not the signal is decoded into a valid LED code.

#### `front_left`
The front sensor sees the left LED code from the dock

#### `front_right`
The front sensor sees the right LED code from the dock

#### `front_middle`
The front sensor sees the middle LED code from the dock

#### `back_noise`
The back sensor sees any LED signal the frequency band used by the dock. Note, this will be true whether or not the signal is decoded into a valid LED code.

#### `back_left`
The back sensor sees the left LED code from the dock

#### `back_right`
The back sensor sees the right LED code from the dock

#### `back_middle`
The back sensor sees the middle LED code from the dock

## Related Documentation
``/mobile_base/telescope``  
