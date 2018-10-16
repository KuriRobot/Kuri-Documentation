---
layout: reference
title: audio_voice_delegate.launch
category: launch
tags: 
- ${tag}
- ${tag}
---

## Launch File Definition
```
<launch>
    <arg name="wakeword_source" default="system-in.monitor"/>
    <arg name="soundhound_client_id"/>
    <arg name="soundhound_client_key"/>
    <arg name="soundhound_user_id"/>
    <arg name="debug" default="yes"/>
    <arg name="direction" default="none"/>
    <arg name="disable_awake" default="False"/>
    <arg name="disable_exchange" default="False"/>

    <group>
        <rosparam subst_value="True">
audio_voice_delegate:
    wake:
        type: okhound
        params: {}
    capture:
        type: pulse
        params:
            device: $(arg wakeword_source)
            sample_rate: 16000
            channels: 1
            latency_msecs: 100
    agent:
        type: soundhound
        params:
            client_id: $(arg soundhound_client_id)
            client_key: $(arg soundhound_client_key)
            user_id: $(arg soundhound_user_id)
    debug: $(arg debug)
    disable_awake: $(arg disable_awake)
    disable_exchange: $(arg disable_exchange)
    awake_timeout: 7.5
    wake_threshold: 0.26
    direction: $(arg direction)
        </rosparam>

        <node name="audio_voice_delegate" pkg="audio_realtime" type="audio_voice_delegate" respawn="true" respawn_delay="10">
        </node>
    </group>
</launch>
```

## Arguments
#### `wakeword_source`
PulseAudio source or sink-monitor that audio_voice_delegate should listen to 
for possible wake word phrases

#### `soundhound_client_id`
Unique client ID provided by SoundHound, defaults to the client created by 
Mayfield for Kuri commands

#### `soundhound_client_key`
Unique client key provided by SoundHound, defaults to the client created by
Mayfield for Kuri commands

#### `soundhound_user_id`
Unique user ID for this request, defaults to the UUID of the robot

#### `debug`
Deprecated (unused)

#### `direction`
Deprecated (unused)

#### `disable_awake`
When set, disables publishing of the Awake message and disables the ability of
a detected wake word to trigger the start of audio transcription 

#### `disable_exchange`
When set, disables publishing of the Exchange message and sets the Kuri audio 
state back to `STATE_ASLEEP` (listening for the wake word) after a duration of
`awake_timeout`

## ROS Node
``audio_voice_delegate``