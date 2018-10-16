---
layout: reference
title: audio_realtime
category: node
tags: 
- realtime
- echo cancellation
- AEC
- beam forming
- audio
---

## Description
This node is responsible for processing real-time audio on PulseAudio sources 
and writing processed audio to PulseAudio sinks. The processing that occurs on
the audio includes dynamic gain control, echo cancellation, beam forming and
spatial filtering, and noise reduction. The ``signalessence`` library is a 
dependency that manages the algorithmic complexity of the audio processing, and
`audio_realtime` is a wrapper that manages the interface between PulseAudio
buffers/streams and those APIs. 

### Explanation of Acoustic Echo Cancellation (AEC) Pipeline

![Audio Pipeline Diagram](/assets/images/reference/audio_pipeline.png)

**Rcv Path**  
Performs dynamic gain control, equalization, and crossover

***system_out***  
Identifiers:
- "far end talker"
- rin
- PulseAudio default sink (for media playback)

***line_out***  
Identifiers:
- "loudspeaker"
- rout
- PulseAudio sink alsa_output.default

**Tx Path**  
Performs acoustic echo cancellation, beam forming and spatial filtering,
noise reduction, and dynamic gain control

***line_in***  
Identifiers:
- "near end talker" (sin), "reference signal" (refin)
- sin + refin
- microphone input + reference signal copied from line_out
- PulseAudio source alsa_input.default

***system_in***  
Identifiers:
- sout
- PulseAudio default source (post-AEC)

## Dependencies
- PulseAudio
- ``signalessence``

## Services
#### `/speaker_phone/get_direction`  
``GetDirection.srv``  
Retrieves the direction vector of the most recent audio capture, in Cartesian
coordinates, as well as an angle in degrees

```sh 
$ rosservice call /speaker_phone/get_direction 0 1000 0
direction:
  x: -97.0
  y: -26.0
  z: 0.0
relative_angle: 195
```
  
#### `/speaker_phone/get_field`
``GetField.srv``  
Retrieves the value of a diagnostic field in the Signal Essence library

```sh 
$ rosservice call /speaker_phone/get_field sercv_rin_power_db_00
json_value: -379.2977905273438
```

#### `/speaker_phone/list_fields`
``ListFields.srv``  
Lists all of the available diagnostic fields in the Signal Essence library, 
including information about type, length, description and read/write mode

```sh 
$ rosservice call /speaker_phone/list_fields
fields:
  -
    name: aecmon_sin_power_per_mic
    type: float32
    length: 4
    description: ''
    mode: read|write
...
```

#### `/speaker_phone/set_field`
``SetField.srv``  
Writes a value to a diagnostic field in the Signal Essence library, assuming 
the field is writable
> NOTE: There is a known bug that may prevent use of this service

## Parameters
#### `/audio_realtime/line_in`
PulseAudio source associated with the microphone input.

#### `/audio_realtime/line_out`
PulseAudio sink associated with audio playback on the loudspeakers.

#### `/audio_realtime/params/bulk_delay`
Configured delay between audio playback and microphone recording in samples. 
Kuri's XMOS firmware currently handles the loopback of audio playback, which 
means the only delay is the time required for sound to travel the air between 
the loudspeakers and the microphones (~1.5ms). This is equivalent to 0 samples,
(where the sample size is 10ms) or a `bulk_delay` of 0.

#### `/audio_realtime/system_in`
PulseAudio source or sink-monitor used by applications and higher-level Kuri
software that requires processed microphone input.

#### `/audio_realtime/system_out`
PulseAudio sink associated with audio sent by applications and higher-level 
Kuri software for playback through the loudspeakers.

#### `/audio_realtime/type`
The name of the library used for audio processing. It is recommended that this 
remain set as `signal-essence` and not modified, for stability of the audio
system.

## Launch File
``audio_realtime.launch``  