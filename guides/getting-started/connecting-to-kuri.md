---
layout: guide
title: Connecting to Kuri
category: getting-started
tags: 
- SSH 
---

## Goal
The goal of this guide is to allow you to connect to Kuri for the first time.

## Getting Kuri on WiFi
Connecting Kuri to WiFi happens during the onboarding process through the app.  During the process you are asked to enter your WiFi credentials so that the app can send the information to Kuri through BlueTooth.

The first step is to create an account through the OSRF hosted cloud or run Kuri on the local network only.
![](/assets/images/getting-started/Screenshot_Kuri_20181008-132348.png)

![](/assets/images/getting-started/Screenshot_Kuri_20181008-132402.png)

The next few steps guide you through turning Kuri on and setting up the dock properly.
![](/assets/images/getting-started/Screenshot_Kuri_20181008-132835.png)

![](/assets/images/getting-started/Screenshot_Kuri_20181008-132851.png)

![](/assets/images/getting-started/Screenshot_Kuri_20181008-132858.png)

![](/assets/images/getting-started/Screenshot_Kuri_20181008-132904.png)

Through bluetooth the phone looks for Kuri and, if more than one is found, will allow you to select the Kuri to connect to.
![](/assets/images/getting-started/Screenshot_Kuri_20181008-132937.png)

![](/assets/images/getting-started/Screenshot_Kuri_20181008-132946.png)

Once connected to your Kuri through bluetooth, the WiFi connection page lets you send the WiFi credentials to Kuri so that he too can be online.

## Troubleshooting wifi
If Kuri connects but complains that it can't talk to the internet, please just try connecting again.

If Kuri does not connect at all, wait until Kuri makes
the startup chime (the power button light should go from flashing blue to solid
blue, or if he is on the dock and charging, from flashing amber to solid amber,
and Kuri should emit a pleasant chime around that time), then try again
(up to 10 times or so--unfortunately, this part got a bit flaky during the hasty
conversion to mini-cloud/no-cloud).

If wifi still will not connect, try re-starting setup and trying again.

If that still fails, try doing a
[Manual factory reset](https://helpcenter.heykuri.com/hc/en-us/articles/360001548488-Manual-factory-reset),
and then try setup again.


## Connecting to Kuri again
![](/assets/images/getting-started/Screenshot_Kuri_20181008-133033.png)

After this is completed, the app connects to Kuri so that the rest of setup can be finished.  These steps include creating a map of the house, and learning to control him through the app.  

If your app gets stuck here, it may be because your Kuri needs to update
to the newest Kuri software version.

## Kuri software update
The app should trigger Kuri to
query the update server and update his software at this point (which can take from
several minutes to about half an hour, depending on the speed of your connection),
but sometimes this attempt fails, especially if the wifi network that Kuri
is on has an annoying firewall / network configuration that prevents
computer-to-computer connections, or blocks MQTT messages from getting through.  

To get your Kuri to update separately from using the app, take him to
a network without restrictions, leave him on and charging on the dock,
and he should attempt to auto-update every hour, 15 minutes after the hour.

![](/assets/images/getting-started/Screenshot_Kuri_20181008-133104.png)

## Finding Kuri's hostname
Kuri's hostname is based upon the serial number of the robot which is printed on the box as well as on the bottom of the robot.  The hostname is built with a base `kuri-0000` with the addition of the last numbers and letters from the serial number.

For example, if Kuri's serial number is `KR118160000abc`, the hostname is `kuri-0000abc`.

During the onboarding process, the searching for robots step only returns one result since only one Kuri is around.  This should be your Kuri and it will report the hostname of the robot. 

## Finding Kuri's IP address
Once Kuri is online, it is possible to find his IP address.  This can be useful if it is not possible to use the hostname to connect to Kuri remotely due to the network setup.

#### Linux command line
Through the Linux command line it is possible to find the IP addresses of computers on the network.  The program `nmap` allows your computer to search through the network and find other computers which respond.  Run the program as follows using your own IP address as the starting point.

```bash
host:~$ sudo nmap -sn 192.168.1.110/24
```

Results should come back as a long list with a Kuri showing up similar to this:
```bash
Nmap scan report for kuri-0000abc.dev.mayrobo.com (192.168.1.100)
Host is up (0.21s latency).
MAC Address: 03:02:92:4H:E3:B6 (Aaeon Technology)
```

#### Android/iOS
Fing is a free app for Android or iOS which allows users to scan the network for devices.  It is one of many apps which allow users to check on their network status.  The documentation on how to use the app and find devices can be found in the [Fing docs](https://help.fing.io/knowledge-base/how-use-fing-app/).

## Connecting to Kuri over SSH
Kuri is running an SSH server to allow users to connect remotely through a terminal.  Once Kuri is set up on WiFi and the hostname is determined, it is time to try and connect through a computer.

> The default username on Kuri is `mayfield` and the default password is `freekuri`.

```bash
host:~$ ssh mayfield@kuri-0000abc
```

When connecting for the first time to Kuri over SSH, the output should be similar to this:
```bash
host:~$ ssh mayfield@kuri-0000abc
The authenticity of host 'kuri-0000abc (192.168.1.100)' can't be established.
ECDSA key fingerprint is SHA256:0000000000000000000000000000000000000000000.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added 'kuri-0000abc' (ECDSA) to the list of known hosts.
DISCLAIMER: By logging in or accessing this system you agree to the terms of
            use and licensing restrictions supplied in the Robot Recipient
            Agreement. In addition, by accessing this system you acknowledge
            that any modifications to the software or configuration on this
            system incur risk that could render this system unstable or
            unusable which you are solely responsible for.

mayfield@kuri-0000abc's password: 
Welcome to Ubuntu 14.04.5 LTS (GNU/Linux 4.4.13-mayfield x86_64)

 * Documentation:  https://help.ubuntu.com/
mayfield@kuri-0000abc:~$
```

At this point you are now within the home folder of the mayfield user on Kuri.

## Troubleshooting SSH
If you cannot SSH into your Kuri, first try using the IP address instead of the hostname
(using the IP address from the example above, that would look like this):  
```bash
host:~$ ssh mayfield@192.168.1.100
```  
If that fails, your Kuri may need a software update.  Follow the instructions above,
under the section ``Kuri software update``.  

If your Kuri's software has
already updated, and SSH is still failing, try doing a
[Manual factory reset](https://helpcenter.heykuri.com/hc/en-us/articles/360001548488-Manual-factory-reset),
and then run setup again to re-establish Kuri's wifi connection.  

If that still fails, the only recourse left is to open Kuri up and connect
a serial debug cable.  See ``Making and using a debug cable`` for details.

## Setting up passwordless SSH
Passwordless SSH is a method to allow users to connect to a remote machine without typing in the password each time.  This method of connecting to a remote host is more secure since the security keys are harder to break than a username/password combination.  The following steps generate an RSA key and set up Kuri to accept the key as authentication rather than using the password.  Users need the hostname and username/password pair for Kuri to properly set up the connection.

This is a common method for connecting to a remote host over a Linux terminal.  If something doesn't work with this guide, using Google can provide a wide array of information on the subject. 

#### Step 1
Generate an RSA key pair on the local machine.  Accepting the default parameters when prompted is not a problem.
```bash
host:~$ ssh-keygen
```

#### Step 2
Copy the public SSH key onto Kuri.  This is a special SSH program that runs locally to securely copy the public portion of the key onto the Kuri.
```bash
host:~$ ssh-copy-id mayfield@kuri-0000abc
```

#### Step 3
SSH into Kuri to test the setup.  If everything is correct, the output should be similar to that shown in the [Connecting to Kuri over SSH](#connecting-to-kuri-over-ssh) section.
```bash
host:~$ ssh mayfield@kuri-0000abc
```

#### Step 4 (optional)
An SSH configuration file located on the local machine at `~/.ssh/config` defines connections which can be given aliases to hide the details of the connection.  Below is an example to connect to Kuri as configured above.

```
Host kuri
  HostName kuri-0000abc
  User mayfield
```

Setting up the ssh configuration file as so will allow users to connect to Kuri with the following line
```bash
host:~$ ssh kuri
```

## Troubleshooting

#### Could not resolve hostname
If trying to SSH into Kuri results in an error such as
```
ssh: Could not resolve hostname kuri-00000abc: Name or service not known
```
there could be two issues.  One is that the computer and Kuri are not on the same network and cannot see each other.  Two is that the network cannot resolve hostnames into IP addresses and the kuri hostnames given above need to be replaced with the specific IP address of Kuri.

#### Remote Host Identification has changed
If the network is mapping Kuri IP addresses into hostnames, sometimes it happens that the specific IP address of your Kuri changes between connections over SSH.  When this happens, an error like this occurs:
```bash
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @
@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
IT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!
Someone could be eavesdropping on you right now (man-in-the-middle attack)!
It is also possible that a host key has just been changed.
The fingerprint for the ECDSA key sent by the remote host is
SHA256:0000000000000000000000000000000000000000000.
Please contact your system administrator.
Add correct host key in /home/user/.ssh/known_hosts to get rid of this message.
Offending ECDSA key in /home/user/.ssh/known_hosts:37
  remove with:
  ssh-keygen -f "/home/user/.ssh/known_hosts" -R "kuri-0000abc"
ECDSA host key for kuri-0000abc has changed and you have requested strict checking.
Host key verification failed.
```
If you trust this network, this is probably benign and you can run the `ssh-keygen` line as suggested and try reconnecting to Kuri.  If you are unsure, please contact your system administrator and confirm the changes which have occurred.

