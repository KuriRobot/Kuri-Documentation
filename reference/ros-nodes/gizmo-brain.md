---
layout: reference
title: gizmo_brain
category: node
tags: 
- gizmo-brain
- command
- API
---

## Description
Gizmo Brain provides most of the high level autonomous behavior for Kuri, and
provides most of the APIs used by the Kuri app.

## Dependencies
* `assets`
* `audio_realtime`
* `audio_voice_delegate`
* `may_nav_ros`
* `mobile_base`
* `ros_beat`
* `vision_bridge`

## Subscribed Topics
#### `/command`
gizmo_msgs/Command

The primary interface for commanding behavior from kuri.  Each command is a 
string name and an optional list of key/value parameters.  When a command is
received by the robot, it will be republished on the /command/cmd_ack topic

* dock:  Kuri will autonomously navigate back to its dock and move onto the charger
* undock: Kuri will wake-up, drive off the dock, and look left and right before
beginning autonomous behavior
* force_idle: Break Kuri out of any autonomous behavior (photo-shoot, wander) and
force a transition into the 'idle' state.
* capture: Performs the Kuri 'first moment capture'.  Kuri will look up, wait to
see a face, then count down with the chest light and take a five second capture
* wander: Kuri will start to wander
* override_mode: Takes a key of "override" and a value of "on" or "off". If the
value is "on", and Kuri has an active data channel connection (through `kuri-bridge` or
the app) then Kuri will enter Kuri Live mode and drive if sent Twist messages.
* sleep: Forces Kuri to go to sleep
* stop: Stops music and goes to idle
* bluetooth_connect_and_pair: Causes Kuri to enter Bluetooth pairing mode and connect
to any remembered device
* bluetooth_pair_new: Causes Kuri to enter Bluetooth pairing mode without connecting
* bluetooth_disconnect: Disconnects the current bluetooth device
* play: Takes a paramter with key "uri" and the value is interpreted as a local or
remote source that's passed to the Linux `mplayer` command

#### `/client_interface/navigation/waypoint`
gizmo_msgs.msg.ClientWaypoint

Publish a waypoint UUID on this topic to have Kuri autonomously navigate to
that waypoint

## Published Topics
#### `/command/cmd_ack`
gizmo_msgs/Command

Republishes commands received on the /command topic.  This provides very weak
synchronization guarantees on the robot.  For example, commands handled by
the state machine may be echoed on this topic before the internal state of the
robot is updated.  This topic should probably only be used to verify that Kuri
has received a command, and not for any other synchronization purposes.

## Services

#### `/image_wp_server/load`
image_wp_msgs/Load

Returns a list of waypoints that Kuri knows about

#### `/image_wp_server/add`
image_wp_msgs/Add

Saves the current location as a waypoint with the specified name

#### `/image_wp_server/rename`
image_wp_msgs/Rename

Renames the waypoint with UUID `uuid` to have the name `new_name`

#### `/image_wp_server/remove`
image_wp_msgs/Remove

Deletes the waypoint with the UUID `uuid`

#### `/command/query`
mayfield_msgs/StringExchange

If passed "robot_api" as the input string, returns a JSON dictionary with ``rules`` state.

## Launch File
``gizmo_brain.launch``  
