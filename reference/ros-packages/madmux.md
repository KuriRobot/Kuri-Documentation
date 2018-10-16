---
layout: reference
title: madmux
category: package
tags:
- video
---

## Overview
`madmux` is an interface to Kuri's left eye camera. It consists of 2 parts
- a server process: ``madmux-daemon``
- client libraries in C and python

## Usage
The daemon should be running by default on your Kuri.

The following is an example of python code to get a single JPG frame:

```python
import madmux
import threading

done = threading.Event()


def cb(data):
    with open('test.jpg', 'w') as f:
        f.write(data)
    done.set()


s = madmux.Stream("/var/run/madmux/ch3.sock")
s.register_cb(cb)
done.wait()
s.close()
```

## Reference

### Camera channels

There are 4 channels with different formats:

1. channel 1: H264, 1080p
2. channel 2: H264, 720p
3. channel 3: MJPG, 1080p
4. channel 4: NV12, VGA


### Python API

```python
# in package madmux

class Stream:
    def __init__(self, sockname):
        ''' :param sockname: path to the channel socket
        '''
        pass

    def register_cb(self, cb):
        ''' :param cb: callback to call for each frame
                       the signature is: def cb(data), with
                       `data` a list of bytes
        '''
        pass

    def force_iframe(self):
        ''' on H264 channels, ask the camera for an I-frame
        '''
        pass

    def set_bitrate(self, bitrate):
        ''' :param bitrate: the bitrate, in bps
        '''
        pass

    def set_resolution(self, width, height):
        ''' :param width: width of the image in pixels
            :param height: height of the image in pixels
        '''
        pass

    def close(self):
        ''' close the stream
        '''
        pass
```

### C API

You will need to link against `/opt/gizmo/lib/x86_64-linux-gnu/libmadmux.so.0`

```c
#ifndef MADMUX_H
#define MADMUX_H

#include <stdint.h> /* uint* */

#ifdef __cplusplus
extern "C" {
#endif

struct mdx_stream;

typedef void (*mdx_cb)(uint8_t* buffer, uint32_t size, void* user_data);

/**
 * Open a madmux video channel
 * @param  socket the path to the UNIX socket for that channel
 * @return        the video stream handle
 */
struct mdx_stream* mdx_open(const char* socket);

/**
 * Close a madmux video channel
 * @param stream the stream to close
 */
void mdx_close(struct mdx_stream* stream);

/**
 * Register a callback to receive video frames
 * @param stream    the video stream handle
 * @param cb        the callback
 * @param user_data a pointer to a user data structure
 */
void mdx_register_cb(struct mdx_stream* stream, mdx_cb cb, void* user_data);

/**
 * Force an i-frame in an h264 stream
 * @param stream    the video stream handle
 */
void mdx_force_iframe(struct mdx_stream* stream);

/**
 * Set the bitrate of a non-raw stream.
 * @param stream    the video stream handle
 * @param bitrate   bitrate in bps
 */
void mdx_set_bitrate(struct mdx_stream* stream, uint32_t bitrate);

/**
 * Set the resolution of a stream.
 * @param stream    the video stream handle
 * @param width     the width of the video in pixels
 * @param height    the height of the video in pixels
 */
void mdx_set_resolution(struct mdx_stream* stream, uint16_t width,
        uint16_t height);

#ifdef __cplusplus
}
#endif

#endif /* end of include guard: MADMUX_H */
```

## Nodes
``madmux-daemon``
