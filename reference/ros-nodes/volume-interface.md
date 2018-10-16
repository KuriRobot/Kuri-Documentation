---
layout: reference
title: volume_interface
package: volume_interface
category: node
tags: 
- audio
- volume
---

## Description
The `volume_interface` node is responsible for coordinating volume across the system. It reads the hardware volume buttons directly. It listens to ROS topics for volume changes requested through Bluetooth, the app, or voice commands. It also saves and restores the volume across restarts. It also manages "ducking", lowering the volume of playback audio when listening for a command. It maintains a system volume for sound effects and a Bluetooth volume for music playback, since Bluetooth volume is often much higher.

## Subscribed Topics
### `/volume/duck_set`  
Takes a Bool for whether playback volume should be ducked

### `/volume/app_set`
Takes a ``Volume.msg`` message from the app or from a voice command request to change the volume

### `/volume/bt_set`
Takes a ``Volume.msg`` message indicating a Bluetooth source is requesting a volume change.

### `/volume/save`
Triggers the current volume to be saved to disk.

### `/bluetooth/media_playing`
Listens to this topic to decide whether to use the current Bluetooth volume or the normal system volume.

## Published Topics
### `/volume/hw_set`
Publishes a ``Volume.msg`` message representing the change due to hardware volume buttons being pushed.

### `/volume/level`
Publishes a Byte representing the current volume level from 0-255

### `/volume/button_status`
Publishes a ``VolumeButton.msg`` message representing the physical state of the hardware buttons, used for reset conditions.

## Launch File
``volume_interface.launch``  

There are parameters to control respawn, and also parameters to define what
GPIO pins the buttons are hooked to and whether they are active low or active high.
