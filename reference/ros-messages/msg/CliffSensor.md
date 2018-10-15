---
layout: reference
title: CliffSensor.msg
package:
- mobile_base_driver
- depth_sensor_driver
category: message
tags: 
- cliff sensor
---

## Message Definition
```
# Provides a cliff sensor reading
# This message is generated whenever a particular cliff sensor signals that the
# robot approaches or moves away from a cliff.

# cliff sensor
uint8 RIGHT     = 0
uint8 MIDRIGHT  = 1
uint8 MIDLEFT   = 2
uint8 LEFT      = 3
uint8 BACKLEFT  = 4
uint8 BACKRIGHT = 5

# cliff sensor state
uint8 FLOOR = 0
uint8 CLIFF = 1

uint8 sensor
uint8 state

# distance to floor when cliff was detected
float32 distance

# return rate from the vl6180x, rear cliff sensors only
float32 return_rate
```

## Arguments
#### `sensor`
Identifies which sensor this message is for

```
RIGHT     = 0
MIDRIGHT  = 1
MIDLEFT   = 2
LEFT      = 3
BACKLEFT  = 4
BACKRIGHT = 5
```

#### `state`
Detecting a cliff or not.

```
FLOOR = 0
CLIFF = 1
```

#### `distance`
${description}

#### `return_rate`
${description}

## Related Documentation
``CliffArray.msg``  
