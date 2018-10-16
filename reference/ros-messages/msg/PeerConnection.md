---
layout: reference
title: PeerConnection.msg
package: ros_webrtc
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
string session_id
string peer_id
string signaling_state
string ice_connection_state
string ice_gathering_state
ros_webrtc/MediaConstraints sdp_constraints
bool is_offerer
ros_webrtc/Track[] local_tracks
ros_webrtc/Track[] remote_tracks 
ros_webrtc/DataChannel[] data_channels
```

## Arguments
#### `session_id`
${description}

#### `peer_id`
${description}

#### `signaling_state`
${description}

#### `ice_connection_state`
${description}

#### `ice_gathering_state`
${description}

#### `sdp_constraints`
${description}

#### `offerer`
${description}

#### `local_tracks`
${description}

#### `remote_tracks`
${description}

#### `data_channels`
${description}

## Related Documentation
``${name of associated topic}``  
``${name of associated topic}``  
