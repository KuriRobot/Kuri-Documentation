---
layout: reference
title: Connection.msg
package: gizmo_msgs
category: message
tags: 
- webrtc
- kuri live
---

## Message Definition
```
bool is_connected
string peer_id
bool are_all_peers_gone
```

## Description

This message is to be published when WebRTC peers connect or disconnect.
As a special case, a message with `are_all_peers_gone` set to `true` can be
sent when it is known that no peers are connected, e.g. after a node respawn.

## Arguments
#### `is_connected`
If set to `true`, a new peer connection has been established. Otherwise, the
connection was just dropped.

#### `peer_id`
The unique ID of the peer.

#### `are_all_peers_gone`
If set to `true`, other fields can be left with default values. This will
signify that the WebRTC node has lost all its peers.

## Related Documentation
``gizmo_webrtc_connections``
