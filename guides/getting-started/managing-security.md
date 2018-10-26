---
layout: guide
title: Security
category: getting-started
tags:
- networking
---

## Goal

Through this quick guide you will learn a few tips about keeping your
Kuri secure.

Your Kuri comes out of the box in a software configuration that allows
the following network connections:

- SSH on TCP port 22
- WebRTC with `flubnub` signaling on TCP port 9000
- HTTP interface to moments on TCP port 80

Additionally, there is a UART internal port on the high speed board
that is hooked to a login prompt giving the same access as the SSH server.


## Changing the console password

Out of the box, anybody within the same network can have full control
of your Kuri robot. To disallow this, the first step is to change the
`mayfield` user password.

This can be done by logging in (through SSH) and calling the `passwd` utility:

```bash
passwd
```

This command will prompt you for the current password and for a new one.


## Using SSH public key authentication

This step makes connecting to your robot more secure as no password has to interactively
be typed too log in, and it also makes it more convenient for the same reason.

### Linux & macOS

1. generate a key pair
   ```
   ssh-keygen
   ```
2. copy the public key to the robot
   ```
   cat ~/.ssh/id_rsa.pub | ssh mayfield@kuri-XXXXX.local "mkdir -pm 0700 ~/.ssh && cat >> ~/.ssh/authorized_keys"
   ```

### Windows

There are guides on how to do that on Windows, such as this one: https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows

## Blocking firewall ports

Most ports on your Kuri are blocked by an `iptables` firewall by default.
You can list all the firewall rules with the following command:

```bash
sudo iptables -vnL --line-number
```

The order in that list of rules matter: each packet will be matched against
that list and any rule that routes it to the `ACCEPT` target will prevent
that packet from going further down the list.
The last rule matches all packets and sends them to the `DROP` target. What
this means in English is:

- if a packet matches any of the `ACCEPT` rules, let it through
- otherwise, discard it

In order to block one of the open ports, you will have to delete some rules.

Below is an example of the output of the above `iptables` list:

```
mayfield@kuri-0000152:~$ sudo iptables -vnL --line-number
Chain INPUT (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination
1     339M   78G ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0
2        6   624 ACCEPT     icmp --  *      *       0.0.0.0/0            0.0.0.0/0
3        0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:67
4        0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:69
5        0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:111
6     5225  397K ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:123
7        0     0 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            multiport dports 111,2049
8        0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            multiport dports 111,2049
9        0     0 ACCEPT     tcp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            tcp dpt:1892
10       0     0 ACCEPT     udp  --  eth0   *       0.0.0.0/0            0.0.0.0/0            udp dpt:1892
11    1744  138K ACCEPT     udp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            udp dpts:10000:65535
12     341 27986 ACCEPT     tcp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            tcp dpt:22
13     200 14102 ACCEPT     tcp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80
14   24496 3770K ACCEPT     udp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            udp dpt:5353
15       0     0 ACCEPT     tcp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            tcp dpt:9000
16   11488 2200K ACCEPT     all  --  *      *       0.0.0.0/0            0.0.0.0/0            ctstate RELATED,ESTABLISHED
17    3887  508K DROP       all  --  *      *       0.0.0.0/0            0.0.0.0/0

Chain FORWARD (policy ACCEPT 0 packets, 0 bytes)
num   pkts bytes target     prot opt in     out     source               destination

Chain OUTPUT (policy ACCEPT 339M packets, 78G bytes)
num   pkts bytes target     prot opt in     out     source               destination
```

In the following example, we will remove the rule that opens the port to
the HTTP moment server on TCP port 80:

```bash
sudo iptables -D INPUT 13
```

The important part is the number `13`, it corresponds to the line that
reads the following:

```
13     200 14102 ACCEPT     tcp  --  wlan0  *       0.0.0.0/0            0.0.0.0/0            tcp dpt:80
```

After running that command, the TCP port 80 will be blocked and the moment
server effectively disabled.

There is ample documentation online about how to configure a firewall
with `iptables`, for further details, pick your favorite search engine and
ask away.
