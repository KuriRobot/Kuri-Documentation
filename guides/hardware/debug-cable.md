---
layout: guide
title: Making and using a debug cable
category: hardware
tags:
- debug
- serial
---

## Goal
Make your own serial debug cable, to be able to use the debug console in cases
where you cannot ssh into Kuri.

## Overview
Kuri's main board has an open port, that when connected to your
computer's USB port via a custom TTL cable, allows you to log in to your Kuri.

## Making a debug cable
For the debug console, we use [3.3V TTL cables from FTDI that have been
modified with the correct connector]
(https://www.ftdichip.com/Products/Cables/USBTTLSerial.htm).

Connector housing:  
Manufacturer: JST  
Housing Part Number: PHR-3  
Terminal Part Number: SPH-002T-P0.5L (note: precrimped wire leads are also
available and will likely be easier to use since you won't have the proper crimper)  
Pinout:  
1: TX (output from board) -- Yellow on FTDI cable  
2: RX (input to board) -- Orange on FTDI cable  
3: GND -- Black on FTDI cable  

(Alternatively, if you email support@heykuri.com and ask very nicely, someone
might be willing to lend you a debug cable, particularly if you are in the
Bay Area.)

## Opening up your Kuri

See the page ``Opening up Kuri's Torso`` for instructions on how to remove
Kuri's front shell to install the debug cable.

## Connecting the debug cable to Kuri's main board

Once you have the shell open, you should plug the debug cable into the
only open port that the cable fits into.  You can then route the cable out
to the opening in Kuri's arm and tape/velcro it down, so that you don't
have to open Kuri up to use it next time.

## Connecting the debug cable to your computer
Now that the debug cable is plugged in to Kuri, plug the USB end (using
a USB extension cable if needed) into your computer's USB port.

## Talking to Kuri from Linux
If you are
using a Linux computer, you can using the command-line application `screen`
to talk to Kuri.  If it is not installed, you can install it using
```sudo apt install screen```.  

Now connect to Kuri over /dev/ttyUSB0, with a baud rate of 115200:  
```
sudo screen /dev/ttyUSB0 115200
```  
(If you don't want to use sudo, add your username to the `dialout` group
in /etc/groups.)

## Talking to Kuri from Windows
If you are using a Windows computer,
download [PuTTY](https://www.putty.org/), switch the Connection Type to Serial,
enter the correct
COM port under Serial Line, edit Speed to use a baud rate of 115200, and
the use the Open button to start the session.

## Booting up Kuri
Now try switching your Kuri on.  You should see a bunch of stuff appear,
and ideally a prompt to allow you to log in to Kuri.  If you don't get
the prompt, hopefully there are nice error messages appearing to help you
understand what's wrong.


