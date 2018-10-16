---
layout: guide
title: Using Tools in mayrobo
category: developer-tools
tags: 
- mayrobo
---

## Mayrobo-tools

Mayrobo-tools is a set of scripts which make running things on the Kuri robot a bit easier.  Each of these scripts are installed into the system paths and available for use.

### installgbz
The script installs a gizmo tarball file.

#### Help
```bash
usage: sudo installgbz [-i] partition gbz
	
	Options:
	 -i    ignore compatibility check
	
	example: ./installgbz / gizmo-develop-0a5ff40_amd64.tar.gz
	
	partition can be '/', in which case the GBZ is installed on
	the running host.
```

#### Example
```bash
$ sudo installgbz -i / gizmo-develop-1f55900_amd64.tar.gz
extracting GBZ
skipping compatibility check
updating link
Cleaning up on exit
GBZ installed.
```

### installmgz
The script installs a depth sensor tarball file.  It is identical to the installgbz script but works on mgz files rather than gbz.

#### Help
```bash
Must run with sudo

usage: sudo installmgz partition mgz

example: sudo installmgz / magellan-b3ca6a.tar.gz

partition can be '/', in which case the MGZ is installed on
the running host.
```

#### Example
```bash
$ sudo installmgz / magellan-d30f2d3.tar.gz
Extracting MGZ
Swapping magellan
Cleaning up on exit
MGZ installed.
```

### roboversion
An informational script which tells the user about the versions of software and hardware running on the robot.  For diagnosing problems, it is a good place to tell others who may be helping debug what is running on the robot.

#### Example output
```bash
Current Hardware Config:
	HW: dvt
	XMOS: 20180509
	UUID: ed56d923-ca2d-4ec9-b7e3-4ba6782130b1
	Serial Number: KR118160000339
	Production hostname: kuri-0000339
Current Software Config:
	Image: robot-qa rc-1.0.89 cf7a6960797df388bb8b2649db2268b9fe0d13d7
	GBZ: rc-1.0.89 8a948e04faf229dd0814a1aa96e787391ec6f6b1
	Compatible Images: ['dd3cb67a', 'cf7a6960']
	MGZ: 11
	OTA: 22
```

`HW`: The specific hardware revision of this robot

`XMOS`: audio firmware version

`UUID`: robot's unique ID

`Production Hostname`: hostname of the robot

`Image`: the base image of the robot.  first is the environment, second is the release tag, third is the git hash of the commit used to generate the image

`GBZ`: the gizmo brain of the robot.  first is the release tag, second is the git hash

`Compatible Images`: compatibility list between image and gbz

`MGZ`: version number of the depth sensor software

`OTA`: configuration ID for the OTA update
