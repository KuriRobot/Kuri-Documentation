---
layout: guide
title: Using WebRTC for Custom Applications
category: advanced
tags:
- webrtc
---

## Goal

Through this guide, you will learn to connect to the robot via
WebRTC, in order to exploit the following features:

- live bidirectional audio
- live video feed from the robot
- ROS bridge over the data channel

## The pieces

Three packages from the robot software will be used:

- ``madmux`` the video server
- ``yawl`` the WebRTC library
- ``gizmo_webrtc`` the high-level application implementing signaling,
  the ROS bridge and various connection lifecycle hookups

## A few key concepts

### WebRTC

WebRTC is an open standard for real-time communication for browsers and
other mobile applications. It is supported by most modern browsers, such as
Firefox and Chrome.

The standard defines protocols and APIs to establish peer-to-peer connections,
potentially through an intermediary.

### Signaling

In order for a WebRTC connection to be established between two peers, a
third-party communication mechanism is needed to exchange the needed pieces
of information needed by each peer to connect to the other. This is called
*signaling*.

On the robot, there are two signaling mechanisms:

- `flubnub`: a websocket-based local-network-only signaling
- `mqtt`: an authenticated pub/sub mechanism using AWS IoT


## Tutorial: using a web browser to connect to my Kuri

The following steps have to be run from a development environment
connected to the same network as Kuri.
The following has been tested with recent versions of Firefox and Chrome.

1. checkout the code:
   ```
   git clone https://github.com/KuriRobot/kuri-documentation
   ```
2. run the local server
   ```
   cd kuri-documentation/examples/webrtc
   python3 -m http.server
   ```
3. open a browser window and point it to `http://localhost:8000`
4. get the UUID of your robot by running the following command on the robot
   ```
   roboversion
   ```
5. enter the hostname and the robot UUID in the webpage and click the `Join`
   button
6. you should see what the robot sees, and a text box will appear

### Extra steps: the rosbridge protocol

The text box that appeared enables you to send commands and receive
responses to and from the robot via the
[rosbridge](https://github.com/RobotWebTools/rosbridge_suite/blob/indigo/ROSBRIDGE_PROTOCOL.md)
protocol.
