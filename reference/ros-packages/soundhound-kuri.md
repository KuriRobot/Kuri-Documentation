---
layout: reference
title: soundhound_kuri
category: package
tags: 
- transcription
- voice commands
- Houndify
---

## Overview
Ths package contains the static library and associated header used for wake 
word detection, as well as a modified (for reduction of size) copy of the 
[Houndify](https://houndify.com) C++ SDK.

## Usage
The wake word and SDK libraries are linked during the catkin build process 
for ``audio_voice_delegate``. 
