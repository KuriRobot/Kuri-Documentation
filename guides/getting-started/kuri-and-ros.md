---
layout: guide
title: Connecting to Kuri through ROS
category: getting-started
tags:
- ROS
- firewall
- mDNS
---

## Goal

The goal of this guide is to help you setup your Kuri so that you can
use ROS tools such as `rviz` from a development machine on the same network
to connect to Kuri.

## Steps

### Open the firewall

Notice: this will allow anyone on the same network to control your
robot through ROS. This includes controlling the motors, reading the
sensors and most other functions of your robot.

1. follow the steps in the ``Connecting to Kuri`` guide to connect to
   your robot through SSH
1. open the firewall:
   ```
   sudo iptables -F
   ```

After running this last command, the firewall will remain open until
Kuri is rebooted.

### Work with mDNS and ROS

ROS expects Kuri to be addressable by its hostname.

On macOS and linux, this can be controlled by editing the `/etc/hosts` file.
Below, `<<number>>` is the number that follows `kuri-` in your robot's
hostname.

1. Get the IP address of your robot
   ```
   ping kuri-<<number>>.local
   ```
2. Add this to the bottom of your `/etc/hosts` file:
   ```
   XXX.YYY.ZZZ.WWW   kuri-<<number>>
   ```
3. Set your own ROS hostname
   ```
   export ROS_HOSTNAME=`hostname`.local
   ```
4. Test it out
   ```
   rostopic list
   ```

Note: the IP address may change, depending on your router settings. If
this happens, you may have to edit your `/etc/hosts` file again.
