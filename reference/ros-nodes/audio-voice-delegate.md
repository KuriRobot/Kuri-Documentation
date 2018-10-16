---
layout: reference
title: audio_voice_delegate
category: node
tags: 
- wake word
- hey kuri
- voice commands
- transcription
---

## Description
This node is responsible for handling Kuri voice interactions. Specifically, 
`audio_voice_delegate` has two responsibilities:
- determining if a wake word has been spoken
- managing audio transcription and voice command matching 

If a wake word is detected, a request is made to the 
[Houndify](https://www.houndify.com/) service to determine the spoken command, 
before publishing the results on a ROS topic.

## Dependencies
- PulseAudio
- ``soundhound_kuri``

## Subscribed Topics
- ``/image_wp_server/waypoint_update``    
- ``/voice_commands/update``  

## Published Topics
#### `/audio/voice_delegate/asleep`
``Asleep.msg``   
If audio enters the "asleep" state as a result of the `awake_timeout` (while
transcribing audio) or a call to ``/audio/voice_delegate/sleep``, an empty
message will be published

#### `/audio/voice_delegate/awake`
``Awake.msg``  
If audio enters the "awake" state as a result of a wake word being detected 
or the service ``/audio/voice_delegate/wake_up`` is called, a message will be
published. If the wake word triggered this state change, a non-zero direction 
vector will be provided for the observed source of audio.

```sh 
$ rostopic echo /audio/voice_delegate/awake
direction:
  x: -97.0
  y: 26.0
  z: 0.0
---
```
 
#### `/audio/voice_delegate/exchange`
``Exchange.msg``  
If an audio transcription or command is received from Houndify, a message will 
be published containing the matched command(s), the raw transcription, and any 
known error messages 

```sh 
$ rostopic echo /audio/voice_delegate/exchange
commands:
  -
    name: CustomCommand
    params:
      -
        k: name
        v: Happy Birthday Song
error: ''
transcription: it's my birthday
---
commands:
  -
    name: StopCommand
    params: []
error: ''
transcription: stop
---
commands:
  -
    name: TurnCommand
    params:
      -
        k: direction
        v: -90
error: ''
transcription: turn left
---
```

## Services
#### `/audio/voice_delegate/deafen`
``Deafen.srv``    
Sets mayfield_audio to the "deaf" state. This is the most common way to 
temporarily set Kuri to ignore wake words and voice commands. Kuri must be 
returned to the "asleep" state via service call in order for wake words to be 
recognized.

```sh
$ rosservice call /audio/voice_delegate/deafen
state: deaf
```

#### `/audio/voice_delegate/snooze` 
``Snooze.srv``  
Sets mayfield_audio to the "asleep" listening state. This effectively ends any 
ongoing voice command transcriptions and returns Kuri to a state of listening 
for the wake word.

```sh
$ rosservice call /audio/voice_delegate/snooze
state: asleep
```

#### `/audio/voice_delegate/stat`  
``Stat.srv``  
Reports the current audio status of mayfield_audio. Possible states include 
"awake" (transcribing audio), "asleep" (listening for wake words), and "deaf" 
(ignoring all audio inputs).

```sh 
$ rosservice call /audio/voice_delegate/stat
state: asleep
direction: -97.000000, 26.000000, 0.000000
```

#### `/audio/voice_delegate/wake_up` 
``WakeUp.srv``  
Sets mayfield_audio to the "awake" state. This service triggers Kuri to start 
transcribing audio in attempt to find a voice command match. Transcription 
will time out after ``/audio_voice_delegate/awake_timeout`` and Kuri will 
return to the "asleep" state (listening for wake word).

```sh 
$ rosservice call /audio/voice_delegate/wake_up
state: awake
```

## Service Calls
- ``/speaker_phone/get_direction``  

## Parameters
#### `/audio_voice_delegate/agent/params/client_id`
The client ID provided by Houndify for identification with an account and 
subscribed domains. Defaults to the Mayfield client/account

#### `/audio_voice_delegate/agent/params/client_key`
The client key associated with the Houndify client ID, above. Defaults to the
Mayfield client key

#### `/audio_voice_delegate/agent/params/user_id`
A unique identifier for the robot, used to authenticate the robot with the 
Houndify service, and provide improved location name matching for "go to" voice
commands. Defaults to the Kuri UUID

#### `/audio_voice_delegate/agent/type`
Identifier for the voice transcription service to use. It is recommended that
this be set to `soundhound` and not modified for the stability of voice 
commands.

#### `/audio_voice_delegate/awake_timeout`
The duration of audio samples to send before ending transcription, measured in
seconds

#### `/audio_voice_delegate/capture/params/channels`
The number of channels associated with the audio buffer used for listening

#### `/audio_voice_delegate/capture/params/device`
PulseAudio source or sink-monitor associated with the processed audio input,
used for wake word detection and audio transcription

#### `/audio_voice_delegate/capture/params/latency_msecs`
The acceptable number of milliseconds of latency, used to configure the stream
for listening to audio

#### `/audio_voice_delegate/capture/params/sample_rate`
The sample rate of the audio buffer used for listening

#### `/audio_voice_delegate/capture/type`
System audio API type. Defaults to `pulse`

#### `/audio_voice_delegate/debug`
Deprecated (unused)

#### `/audio_voice_delegate/direction`
Deprecated (unused)

#### `/audio_voice_delegate/wake/type`
Identifier for the wake word library to use. It is recommended that this be
set to `okhound` and not modified for the stability of wake word detection.

#### `/audio_voice_delegate/wake_threshold`
Deprecated (unused) 

## Launch File
``audio_voice_delegate.launch``  