---
layout: reference
title: health_monitor
category: node
tags: 
- health-monitor
---

## Description
The health monitor node collects system and application-level telemetry and
writes it out to rsyslog every 5 minutes.

## Dependencies
This node listens to several topics published by ``gizmo-brain``, but does not
explicitly need any other nodes running in order to function properly.

## Subscribed Topics
``gizmo_brain/state``

``gizmo_brain/touch``

``gizmo_brain/localization_state``

``gizmo_brain/wheels``

``gizmo_brain/nav_sessions``

``gizmo_brain/bump``

``volume/hw_set``

``/mqtt/outgoing``

``/moment/pre_check``

``/moment/post_check``

``/audio/voice/recognized``

``/audio/voice/not_recognized``

``/audio/voice/wake``

## Launch File
``health_monitor.launch``  
