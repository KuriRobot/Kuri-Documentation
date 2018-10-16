---
layout: reference
title: ros_beat
category: node
tags: 
- ros_beat
- dance
---

## Description
The ROS beat node monitors pulseaudio output and uses KISS FFT 
to detect beats-per-minute in real time.

## Dependencies
* Pulseaudio

## Published Topics
`/ros_beat/detection`

`gizmo-brain` listens to this topic to adapt Kuri's dance moves to the music that she's currently playing

## Parameters
`detection_type`

The value of this parameter determines which algorithm
the ROS Beat node will use to derive the BPM from a trailing time series of 
detected beats. There are three valid options:

* 0 - Max gap - use the longest interval between trailing beats as the current BPM
* 1 - Top two gaps - use the average of the two longest intervals between trailing beats as the current BPM
* 2 - Harmonic mean - use the harmonic mean of all intervals in the trailing sequence of detected beats, halving beat intervals above 160BPM

We use 1 (top two gaps) by default.

## Launch File
``ros_beat.launch``
