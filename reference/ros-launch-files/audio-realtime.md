---
layout: reference
title: audio_realtime.launch
category: launch
tags: 
- AEC
- echo cancellation
- audio localization
- beam forming
---

## Launch File Definition
```
 <launch>
    <arg name="pulseaudio_line_out" default="alsa_output.default"/>
    <arg name="pulseaudio_line_in" default="alsa_input.default"/>
    <arg name="pulseaudio_local_in" default="alsa_input.default"/>
    <arg name="pulseaudio_system_out_monitor" default="system-out.monitor"/>
    <arg name="pulseaudio_system_in" default="system-in"/>
    <arg name="mic_0" default="FRONT_LEFT"/>
    <arg name="mic_1" default="FRONT_RIGHT"/>
    <arg name="mic_2" default="REAR_LEFT"/>
    <arg name="mic_3" default="REAR_RIGHT"/>
    <arg name="loopback_left" default="FRONT_CENTER"/>
    <arg name="loopback_right" default="LFE"/>

    <group>
        <rosparam subst_value="True">
audio_realtime:
    type: signal-essence
    params:
        bulk_delay: 0
    system_out: system/out
    line_out: line/out
    line_in: line/in
    system_in: system/in
system:
    out:
        type: pulseaudio
        params:
            device: $(arg pulseaudio_system_out_monitor)
            sample_rate: 48000
            sample_format: s16le
            nb_channels: 1
            latency_msecs: 100
    in:
        type: pulseaudio
        params:
            device: $(arg pulseaudio_system_in)
            sample_rate: 16000
            sample_format: s16le
            nb_channels: 1
            latency_msecs: 100
line:
    out:
        type: pulseaudio
        params:
            device: $(arg pulseaudio_line_out)
            sample_rate: 48000
            sample_format: s16le
            nb_channels: 1
    in:
        type: pulseaudio
        params:
            device: $(arg pulseaudio_line_in)
            sample_rate: 48000
            sample_format: s16le
            nb_channels: 6
            channel_map:
            - $(arg mic_0)
            - $(arg mic_1)
            - $(arg mic_2)
            - $(arg mic_3)
            - $(arg loopback_left)
            - $(arg loopback_right)
            latency_msecs: 100
        </rosparam>

        <node name="audio_realtime" pkg="audio_realtime" type="audio_realtime" respawn="true" respawn_delay="10">
        </node>
    </group>
</launch>
```

## Arguments
#### `pulseaudio_line_out`
PulseAudio sink associated with output to the audio card

#### `pulseaudio_line_in`
PulseAudio source associated with input from the audio card

#### `pulseaudio_local_in`
Deprecated (Unused)

#### `pulseaudio_system_out_monitor`
PulseAudio sink-monitor associated with the sink used by Kuri clients 
("the system") as a destination for audio playback

#### `pulseaudio_system_in`
PulseAudio sink associated with the sink-monitor used by Kuri clients
("the system") as a source when listening for optimized audio input from the 
microphones

#### `mic_0`
Name of [PulseAudio channel](#channel-name-mapping) assigned to the microphone on Kuri's left front

#### `mic_1`
Name of [PulseAudio channel](#channel-name-mapping) assigned to the microphone on Kuri's right front

#### `mic_2`
Name of [PulseAudio channel](#channel-name-mapping) assigned to the microphone on Kuri's left rear

#### `mic_3`
Name of [PulseAudio channel](#channel-name-mapping) assigned to the microphone on Kuri's right rear

#### `loopback_left`
Name of [PulseAudio channel](#channel-name-mapping) assigned to loopback audio from the left channel
of the audio output stereo pair

#### `loopback_right`
Name of [PulseAudio channel](#channel-name-mapping) assigned to loopback audio from the right channel 
of the audio output stereo pair

###### Channel Name Mapping
PA_CHANNEL_POSITION_* are [PulseAudio channel enums](https://freedesktop.org/software/pulseaudio/doxygen/channelmap_8h.html#af1cbe2738487c74f99e613779bd34bf2)
```
{"MONO", PA_CHANNEL_POSITION_MONO},
{"LEFT", PA_CHANNEL_POSITION_LEFT},
{"RIGHT", PA_CHANNEL_POSITION_RIGHT},
{"CENTER", PA_CHANNEL_POSITION_CENTER},
{"FRONT_LEFT", PA_CHANNEL_POSITION_FRONT_LEFT},
{"FRONT_RIGHT", PA_CHANNEL_POSITION_FRONT_RIGHT},
{"FRONT_CENTER", PA_CHANNEL_POSITION_FRONT_CENTER},
{"REAR_CENTER", PA_CHANNEL_POSITION_REAR_CENTER},
{"REAR_LEFT", PA_CHANNEL_POSITION_REAR_LEFT},
{"REAR_RIGHT", PA_CHANNEL_POSITION_REAR_RIGHT},
{"LFE", PA_CHANNEL_POSITION_LFE},
{"SIDE_LEFT", PA_CHANNEL_POSITION_SIDE_LEFT},
{"SIDE_RIGHT", PA_CHANNEL_POSITION_SIDE_RIGHT},
```

## ROS Node
``audio_realtime``