---
layout: reference
title: gizmo_webrtc
category: package
tags: 
- webrtc
- kuri live
---

## Overview
`gizmo_webrtc` implements:
- a bridge between a WebRTC solution, such as `ros-webrtc` or `yawl`, and the
main robot logic
- a signaling mechanism for WebRTC connections:
  - flubnub (client & server)
  - MQTT (client)

## Usage

The `gizmo` process will start Kuri Live. The `flubnub` server will listen on
the TCP port `9000`. To connect, you will need the Kuri app on a mobile device.


## Nodes
- flubnub signaling server: ``gizmo_webrtc_flubnub``
- main WebRTC process node: ``gizmo_webrtc_teleop``
