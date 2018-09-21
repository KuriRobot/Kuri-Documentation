---
layout: reference
title: The depth sensor API
category: depth-sensor
tags: 
- fathom
- depth sensor
---

## Overview

The depth sensor is controlled by the onboard fathom binary. The fathom binary 
running on the Magellan board has an HTTP API, which you can use to turn on and 
off different types of data and manipulate the depth sensor hardware in various 
ways. All interactions are HTTP GET requests.

Monkey (HTTP Server) configuration
Requests against this HTTP API are routed through Monkey, an HTTP server which 
is also running on the Magellan board, and into different functions in the 
fathom binary itself. In order for any HTTP requests to be routed through 
Monkey, they have to match patterns specified in a file on the Magellan board's 
file system, here:
```
/etc/monkey/sites/default
```
The match-able routes through Monkey are specified at the bottom of this file - 
this is what you'll find there:

```
[HANDLERS]
    # FastCGI
    # =======
    Match /command/.* fastcgi
    Match /calibration/.* fastcgi
    Match /stream/.* fastcgi
    Match /imager/.* fastcgi
    Match /status/.* fastcgi
    Match /system/.* fastcgi
    Match /status.* fastcgi
    Match /filter/.* fastcgi
```

This lets you interact with different endpoints like this (assuming the IP of 
your depth sensor is `fe80::2%eth0`):
```
curl http://fe80::2%eth0/status
```

## API Documentation
All of the following endpoints are available as top-level paths on port 80.


## Imager
### `/imager/start`
Start the imager.

### `/imager/stop`
Stop the imager.

### `/imager/duty/<set_number>/<value>`
Change duty cycle with http://<host>/imager/duty/<set_number>/<value>

Where set_number is one of the non-greyscale frame sets and value is a valid duty cycle.

### `/imager/exposure/<set_number>/<value>`
Change exposure with http://<host>/imager/exposure/<set_number>/<value>

Where set_number is one of the frame sets and value is a valid exposure in microseconds.

### `/imager/framerate/<desired framerate>`
The desired framerate must be a float or int value.

### `/imager/mode/<desired mode>`
Change imager mode with http://<host>/imager/mode/<option>

Allowed options: twofreq, threefreq

## Stream
The depth sensor publishes data packets out from its ethernet port - these API calls turn on and off various types of data in the stream.

### `/stream/enableRaw`
Enable raw data stream.

### `/stream/disableRaw`
Disable raw data stream.

### `/stream/enableDistance`
Enable distance data stream.

### `/stream/disableDistance`
Disable distance data stream.

### `/stream/enableIntensity`
Enable intensity data stream.

### `/stream/disableIntensity`
Disable intensity data stream.

### `/stream/enableFlags`
Enable flags data in stream.

### `/stream/disableFlags`
Disable flags data in stream.

### `/stream/enableAmplitude`
Enable amplitude data in stream.

### `/stream/disableAmplitude`
Disable amplitude data in stream.

### `/stream/enableNoise`
Enable noise data in stream.

### `/stream/disableNoise`
Disable noise data in stream.

### `/stream/enablePointCloud`
Enable point cloud in stream.

### `/stream/disablePointCloud`
Disable point cloud in stream.

## System
### `/system/reboot`
Reboot the Magellan board.

### `/system/shutdown`
Shut down the Magellan board.

## Command
### `/command/send_to_me`
Instruct the depth sensor to send data packets to the address from which you are making the HTTP GET request.

### `/command/pixel/amplitude_threshold`

### `/command/pixel/asymmetry_threshold`

## Filter

### `/filter/pop`

### `/filter/push/median`

### `/filter/push/neighbor`

### `/filter/push/asymmetryThresh`

### `/filter/push/amplitudeThresh`

## `/status`
Return some basic information about the state of the sensor's calibration, hardware, and processing - like this:
```
{
    module: {
        frame_count: 0,
        uptime: 0:01:11.862,
        version: master-10000-abcdefg-dirty-qwerty
    },
    comms:  {
        running: true,
        destination: fe80::1,
        port: 10000,
        queue_size: 0
        time_since_last_sent: 78
    },
    calibration:  {
        state: GOOD,
        frequencies: { 80320000: { 90, 135, 180 }, 60240000: { 90, 135, 180 }, 29500000: { 90, 135, 45 }, 3500000: { 45, 90, 135 } },
        min_amplitude: 16.5,
        max_asymmetry: 50,
        bin_mask: 0
        convolution: 0},
    processing: {
        pre:  {
            frames: 728,
            bad frames: 0,
            corrupt frames: 0,
        },
        pixel:  { },
        post:  {
            empty frames: 0,
            streams:  {
                send_raw: false,
                send_distance: false,
                send_intensity: false,
                send_amplitude: false,
                send_cloud: true
            },
            filters:  {
                Median Filter,
                Neighbor Filter,
            }
        },
    },
    imager:  {
        serial: 0006-3818-0407-0819,
        state: RUNNING,
        safety circuit: RUNNING,
        mode: {
            tag: two_frequency,
            framerate: 10,
            set_count: 3,
            0: { frequency:      off, duty_cycle:    0%, exposure: 2000, n_frames: 1 },
            1: { frequency: 80320000, duty_cycle: 37.5%, exposure: 2000, n_frames: 4 },
            2: { frequency: 60240000, duty_cycle: 37.5%, exposure: 2000, n_frames: 4 }
        }
    },
    timing: {
 
          pre_processing_ema:   18,
        pixel_processing_ema:   78,
         post_processing_ema:   45,
        post_serializing_ema:    0,
          packet_sending_ema:    0
    }
 
}
```
