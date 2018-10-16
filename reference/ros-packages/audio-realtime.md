---
layout: reference
title: audio_realtime
category: package
tags: 
- audio
- echo cancellation
- audio direction
- noise
- wake word
- hey kuri
- voice commands
---

## Overview
This package contains the ``audio_realtime`` and ``audio_voice_delegate`` 
nodes. The ``audio_realtime`` node performs real-time processing of audio 
streams for gain control, echo cancellation, beam forming and spatial 
filtering, and noise reduction. The ``audio_voice_delegate`` node listens for 
utterances of the wake word and manages voice command matching through an
integration with the [Houndify](https://www.houndify.com/) voice service.

## Usage
```sh
source /opt/gizmo/setup.sh
roslaunch audio_realtime
roslaunch audio_voice_delegate
```

## Nodes
``audio_realtime``  
``audio_voice_delegate``  
