---
layout: reference
title: yawl
category: package
tags: 
- webrtc
---

## Overview
This package provides a C & python library to handle WebRTC connections.
Audio, video and data channel are supported.

WebRTC signaling needs to be done externally, this package provides hooks.
In the context of the entire robot software, signaling is done
in the ``gizmo_webrtc`` package.

## Usage

Below is the reference of the `yawl.Application` python class that implementations
need to subclass:

```

class Application(object):
    """
    Interface for client applications to override.
    This handles only one peer connection at a time (for now)
    """

    # do stuff - subclasses should call these

    def create_pc(self, peer_id):
        """ create a webrtc pipeline, a data channel, and start the call.
            The offer will come on the on_pc_set_session_description
            callback
        """
        pass

    def delete_pc(self):
        pass

    def datachannel_send(self, data):
        """ send data down the data channel
        """
        pass

    def add_ice_candidate(self, sdp_index, candidate):
        """ add a remote ICE candidate
        """
        pass

    def set_session_description(self, msg):
        """ set remote peer SDP description
        """
        pass

    def set_ice_servers(self, servers):
        self.ice_servers = servers

    # when stuff happens - subclasses should override those

    def on_datachannel_data(self, data):
        """ called when data is available on the data channel
        """
        pass

    def on_disconnect(self, _):
        """ called when the peer connection is closed
        """
        logger.info("got 'disconnect' event, deleting the peer connection")
        self.delete_pc()

    def on_ice_candidate(self, msg):
        """ called when a new local ICE candidate is available
        """
        pass

    def on_session_description(self, msg):
        """ called when the SDP for an offer is ready, typically
            some time after calling create_pc
        """
        pass
```
