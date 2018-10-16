---
layout: reference
title: xmos_linux_tools
category: package
tags: 
- XMOS 
- audio
- flash firmware
---

## Overview
This package contains the tool used for flashing and verification of the 
firmware on the XMOS (audio) device.

## Usage
```sh
sudo /opt/gizmo/env.sh $(catkin_find xmos_linux_tools xmos_updater) [--skip-check] [path]
```

#### `--skip-check`
Instructs the firmware flasher to force update the firmware and disregard the 
version specified as the latest version

#### `path`
Path to the XMOS firmware binary to install. This defaults to 
`/opt/gizmo/share/xmos_linux_tools/mayfield.bin`, the latest official release
of the XMOS firmware by Mayfield.

> NOTE: On upstart, Kuri checks that the XMOS firmware is the latest available,
and installs the latest version if it is not currently installed. If you flash 
a new version of firmware to the XMOS device, it may be overwritten on the 
next boot. To prevent this, update the version string in `update_check` of 
`/opt/gizmo/lib/xmos_linux_tools/xmos_updater`, or disable the `xmos_updater`
script in the `xmos-fw` upstart job

