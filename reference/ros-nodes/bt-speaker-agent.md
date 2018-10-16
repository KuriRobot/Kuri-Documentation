---
layout: reference
title: bt_speaker_agent
package: bt_speaker_agent
category: node
tags: 
- audio
- bluetooth
- bt_speaker_agent
---

## Description
The bt_speaker_agent is a node for communicating with the BlueZ bluetooth
stack on Linux. It publishes information about connected Bluetooth audio
sources, sends commands to those sources, and controls pairing.

When pairing is initiated by sending the appropriate command, Kuri will
become visible as a Bluetooth audio device. It does not require any PIN code
or password to pair. Only one connected device at a time is supported.

## Dependencies
gizmo-bluez custom package

## Subscribed Topics
### Pairing Topics
#### `/bluetooth/req_connect`
Puts Kuri into pairing mode, tries to re-connect to the last connected device

#### `/blueeoth/req_pair_mode`
Puts Kuri into pairing mode ready to pair a new device

#### `/bluetooth/req_disconnect`
Disconnects any currently connected device.

### Audio Control Topics
#### `/bluetooth/req_play`
Sends the play command to any connected audio source

#### `/bluetooth/req_pause`
Sends the pause command to any connected audio source

#### `/bluetooth/req_next_track`
Sends the next track command to any connected audio source

#### `/bluetooth/req_prev_track`
Sends the previous track command to any connected audio source

### Volume Topics
#### `/volume/hw_set`
Tracks volume set via hardware buttons

#### `/volume/app_set`
Tracks volume set by app/voice interactions


## Published Topics
### Pairing Topics
#### `/bluetooth/pair_status`
Publishes the String `connected_device` on a successful pairing and `bluetooth_timeout` if a pairing attempt times out.

#### `/bluetooth/status`
Publishes True if connected and False otherwise

### Audio Control Topics
#### `/bluetooth/media_playing`
Publishes a Boolean indicating whether or not audio is actively playing

#### `/bluetooth/media_metadata`
Publishes a string representing the metadata for the currently track if the audio source provides it.

### Volume Topics
#### `/volume/bt_set`
Publishes volume changes from the connected audio source

## Launch File
``bt_speaker_agent.launch``  
Contains no user configurable parameters
