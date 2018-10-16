---
layout: reference
title: gizmo_webrtc_teleop
category: node
tags:
- webrtc
- kuri live
- signaling
---

## Description
This node contains the WebRTC host and provides signaling to it.
Signaling is done through flubnub for local access, and MQTT for remote access.

## Dependencies
- ros-webrtc
- rospy
- yawl

## Published Topics
``gizmo_webrtc_connection``

## Launch File
``gizmo_webrtc.launch``
