---
layout: reference
title: Detection.msg
package: ros_beat
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
#
# Frequency information.
#

float32 beats_per_minute
float32 bpm_rate_of_change
float32 beat_offset

#
# Energy information.
#

float32 low_freq_energy
float32 mid_freq_energy
float32 high_freq_energy
float32 low_energy_frac
```

## Arguments
#### `beats_per_minute`
The detected BPM from the trailing ~5 seconds of audio played through Kuri.

#### `bpm_rate_of_change`
How quickly the detected BPM is changing over time.

#### `beat_offset`
The offset of the first beat in the time sample represented by the message.

#### `low_freq_energy`
Total energy in the 'bass' band for the sample.

#### `mid_freq_energy`


#### `high_freq_energy`


#### `low_energy_frac`
What fraction of the samples have very little energy. With music, most samples have energy. With voice, the fraction is lower.

## Related Documentation
``ros-beat``  

