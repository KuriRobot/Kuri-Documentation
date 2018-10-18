WebRTC Signaling over MQTT
==========================

This document describes how the signaling is done over MQTT

Rationale
---------

MQTT has been chosen as a signaling mechanism because it is a secure medium that for which we already have authentication figured out. As a pub/sub mechanism, it is very similar to pubnub, which we have been using thus far.

#### Pros
- it is more secure than pubnub
- it is already implemented on the robot, in the iOS app, and in the cloud

#### Cons
- not implemented in webrtc
- only robot implementation is inside of gizmo, which is impractical

Out of scope
------------

- managing MQTT credentials
- webrtc implementation-specific details (e.g. timeouts)


MQTT topics
-----------

Akin to what we were doing with pubnub, each topic is to be used in a unidirectional fashion.
Each robot webrtc host will be listening on the following topic:

```
kuri/<<cloud environment>>/webrtc/host/<channel>/<<robot uuid>>
```

with the following:

| field             | description                                       |
| -----             | -----------                                       |
| cloud environment | 'develop' for now. See MQTT spec for other values |
| channel           | the WebRTC signalling channel which is 'teleop' for now |
| robot uuid        | the unique ID of the robot                        |

Before publishing to the host topic, the client needs to subscribe to the following topic:

```
kuri/<<cloud environment>>/webrtc/client/<<device uuid>>/<<robot uuid>>
```

with the following:

| field             | description                                       |
| -----             | ----------                                        |
| cloud environment | 'develop' for now. See MQTT spec for other values |
| device uuid       | a unique ID associated with the client device     |
| robot uuid        | the unique ID of the robot                        |


Protocol
--------

MQTT exchanges are strings, the most common payload format is JSON. Signaling is done using JSON.

```json
{
    "version": 1,
    "device": "device-id",
    "type": "connect",
    "payload": ""
}
```

### Structure
| field   | type   | values                                                      | description                                                              |
| ---     | ---    | ---                                                         | ---                                                                      |
| version | number | 1                                                           | the current signaling format. must be 1                                  |
| device  | string |                                                             | the uuid of the emitting party. Either the robot uuid or the device uuid |
| type    | string | "connect", "sdp_offeranswer", "ice_candidate", "disconnect" | the type of payload                                                      |
| payload | string |                                                             | the payload                                                              |

### Payload types

| payload type    | description                       |
| ---             | ---                               |
| connect         | ICE server payload                |
| disconnect      | payload not needed                |
| sdp_offeranswer | SDP, either an offer or an answer |
| ice_candidate   | SDP for an ICE candidate          |

### Examples

#### `connect`

```
"{"turn_server":"2.2.2.2","stun_server":"8.8.8.8","username":"1519183423","password":"l3k2l1m2k19k2k"}"
```

#### `sdp_offeranswer`

```
v=0
o=RidgeRun-GstWebRTC 2447305320 0 IN IP4 0.0.0.0
s=RidgeRun-GstWebRTC
t=0 0
m=audio 52667 RTP/SAVPF 111
c=IN IP4 172.17.0.1
a=rtpmap:111 OPUS/48000/2
a=fmtp:111 sprop-maxcapturerate=48000;sprop-stereo=0
a=rtcp:42347
...
```

#### `ice_candidate`

```
a=candidate:6 1 TCP 1015022079 172.17.0.1 53083 typ host tcptype passive
```

### Typical exchange


1. host listens on its topic
1. client publishes the 'connect' message
1. host sends SDP offer with or without ICE candidates
1. client sends SDP answer
1. host and client send ICE candidates to each other until webrtc conneciton is established or timeout occurs
1. when done, client sends 'disconnect' message
