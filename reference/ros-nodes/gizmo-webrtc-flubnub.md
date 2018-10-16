---
layout: reference
title: gizmo_webrtc_flubnub
category: node
tags: 
- webrtc
- signaling
- kuri live
---

## Description
The ``gizmo-webrtc-flubnub`` node is the flubnub server. It listens to TCP port
`9000` and allow peers to exchange messages to each other.
The ``gizmo_webrtc_teleop`` node is a client to this server, the Kuri app is
another one.


## Dependencies
- rospy
- ws4py

## Launch File
``gizmo_webrtc.launch``  
