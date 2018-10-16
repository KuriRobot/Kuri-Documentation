---
layout: guide
title: Updating APT sources
category: developer-tools
tags: 
- apt
---

> By default Kuri doesn't have any apt sources available.  This is by design.  The packages which ship with Kuri are chosen 
for a specific reason and tested to deliver a great working experience.  Updating any of the packages could result in a broken
system.

## Fill in Apt sources
Copy the following lines into Kuri's `/etc/apt/sources.list` file in order to pull packages from the correct ubuntu and ros sources
to match the underlying system.

### Ubuntu sources
```
deb http://archive.ubuntu.com/ubuntu/ trusty main restricted
deb-src http://archive.ubuntu.com/ubuntu/ trusty main restricted

deb http://archive.ubuntu.com/ubuntu/ trusty-updates main restricted
deb-src http://archive.ubuntu.com/ubuntu/ trusty-updates main restricted

deb http://archive.ubuntu.com/ubuntu/ trusty universe
deb-src http://archive.ubuntu.com/ubuntu/ trusty universe

deb http://archive.ubuntu.com/ubuntu/ trusty-updates universe
deb-src http://archive.ubuntu.com/ubuntu/ trusty-updates universe

deb http://archive.ubuntu.com/ubuntu/ trusty-backports main restricted
deb-src http://archive.ubuntu.com/ubuntu/ trusty-backports main restricted

deb http://archive.ubuntu.com/ubuntu/ trusty-security main restricted
deb-src http://archive.ubuntu.com/ubuntu/ trusty-security main restricted

deb http://archive.ubuntu.com/ubuntu/ trusty-security universe
deb-src http://archive.ubuntu.com/ubuntu/ trusty-security universe
```

### ROS sources
```
deb http://packages.ros.org/ros/ubuntu trusty main
```

## Adding GPG Keys
The ROS repositories need additional apt keys to verify the packages downloaded from them.  Run the following lines on Kuri
to download and register they apt keys.  This information is gathered from the official ROS Ubuntu installation page
[ROS Ubuntu installation page](https://wiki.ros.org/indigo/Installation/Ubuntu)

```
sudo apt-key adv --keyserver hkp://ha.pool.sks-keyservers.net:80 --recv-key 421C365BD9FF1F717815A3895523BAEEB01FA116
```

## Using the APT Repos
First do an update to pull in the list of packages.
```
sudo apt-get update
```
Now one can install new packages as usual.
```
sudo apt-get install nano vim emacs
sudo apt-get install ros-indigo-teleop-twist-keyboard
```
