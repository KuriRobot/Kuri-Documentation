---
layout: example
title: Making Kuri play with your kitties
category: examples
license: MIT
tags: 
- rules
- behavior
---

## Goal
Make Kuri into a cat toy--when he sees your cat, you can have him turn on a
laser pointer attached to his head and dance, so the laser dot moves around
and entertains your cat.  

This guide shows you how to change Kuri's rules engine to add a new behavior
that triggers when Kuri sees a cat.  You can use this behavior to call a
function that will turn on a laser pointer.  

In our implementation, we wired up a laser pointer directly to the head
board, using a software-controllable pin that used to control a debug LED.
Unfortunately, that method is not recommended for anyone not from Mayfield's
hardware team, so this guide will not cover that part (sorry!).  

For anyone else, I would recommend instead attaching a
single-board computer (like a Raspberry Pi) with wifi to your laser pointer,
and sending a signal to turn on the laser pointer over your wifi network.  

To see what the result will look like, you can simulate it easily by
getting a laser pointer, taping it in the on position to the side of Kuri's
head (ideally pointed slightly down from horizontal, unless you want it
to be pointed at the walls most of the time), turning Kuri's volume all
the way down, and asking Kuri to dance ("Hey Kuri, play your favorite song").  

## Adding a new task and rule to the rules engine
First, we need to add a code snippet to gizmo_brain that has a new task,
which we will call `laser_on`.  When `laser_on` is called from the rules
engine, it will set Kuri's volume to mute, turn the laser on,
and have Kuri start dancing.  We also need to tell the laser to turn off
when Kuri is done dancing, which we can do by monkey-patching the idle
function.  

Edit the file
`/opt/gizmo/lib/gizmo/gizmo_brain` and add these lines:
```
from gizmo.gizmo_brain import Robot

#######################################################
# PATCH robot object to get new tasks
#######################################################
def laser_on(self, trigger, params, reaction):
    logger.error("LAAAAAAAAAAAZERRRS!!!!!")

    # Mute Kuri
    self._interface.volume.mute()

    # Turn on the laser
    <insert your function call to turn on the laser here>

    # Dance
    self.choreo_dance(trigger, params, reaction)

Robot.laser_on = laser_on

Robot.old_idle = Robot.idle

def laser_off_idle(self, trigger, params, reaction):
    # Turn off the laser
    <insert your function call to turn of the laser here>

    self.old_idle(trigger, params, reaction)

Robot.idle = laser_off_idle
#######################################################
```
A task is simply a function with the signature
`def a_task(self, trigger, params, reaction)`.  All three function args
(trigger, params, reaction) get passed in by the rules engine whenever
the task is called.  In this case, we don't use any of the passed-in
args, although we do pass them through to the `choreo_dance` function,
which is the function that makes Kuri dance to Pancake Robot, by Parry Gripp
(Kuri's favorite song).  

By adding the function `laser_on` to the Robot object, we make it
available for the rules engine to use.  

Additionally, we can save the old idle function in Robot.old_idle,
then create a new idle function (`laser_off_idle`) that turns off the
laser before running the contents of the old idle function.  We then
monkey-patch the Robot object's idle function by doing
`Robot.idle = laser_off_idle`, which replaces the old function with
our new function.  

Now edit the rules for Kuri's rules engine in
`/opt/gizmo/share/gizmo/configs/robot.json`.  

In the list of tasks, add this snippet:  
```
        {
            "name": "laser_on",
            "description": "turns on kitty laser pointer and dances on mute",
            "priority": 3
        },
```  

to register a new task in the rules engine that uses the `laser_on` function
we just defined in gizmo_brain, that has priority 3.  

In the list of rules, modify the rule for the trigger `saw cat` so it looks
like this:  

```
        {
            "trigger": "saw cat",
            "match": [
                "prop.task != 'laser_on'"
            ],
            "priority": 3,
            "reaction": "greeting",
            "task": "laser_on"
        },
```  

This creates a rule that says that whenever the trigger `saw cat`
is seen, Kuri should play the animation `greeting` (in which Kuri
looks up and smiles) and then enter the task `laser_on`.  

The rule has a priority of 3, which means that it will override Kuri's
photoshoots.  If you don't want it to override Kuri's photoshoots
(Kuri should only play with cats when idle), then change both the task and
rule priorities to 4.  

Also in the list of rules, find the rules with the trigger `stop_dance`.
Because the robot will now be using a new task, called `laser_on`,
the old `stop_dance` rules will not match our new task.  Create a new rule
that looks like this:  

```
        {
            "trigger": "stop_dance",
            "match": ["prop.task == 'laser_on'"],
            "priority": 3,
            "task": "go_idle",
            "reaction": "dance_done",
            "description": "Stop dancing when the kitty laser is on"
        },
```  

For more details on modifying the rules engine, see
``Working with the Kuri Rules Engine``.  

To test out your new rule, show a cat to Kuri (a stuffed cat or a picture
of a cat will also do) and verify that he meows and starts dancing.  

## Mounting the laser on Kuri's head

You can simply tape the laser pointer to the side of Kuri's head, ideally
pointed slightly down from horizontal.  

ORRRR, you could sew an adorable kitty hat to hold the laser pointer!  
Like this one, made by Stephanie Lee:  

~[Kuri with laser hat](../assets/images/kitty_hat.jpg)

This particular hat also happens to have a bonus pocket for a mouse toy,
for extra adorability:  

~[Laser hat mouse pocket](../assets/images/kitty_hat_mouse.jpg)

Now Kuri can entertain kitties whenever he sees them!  If you want to see
what that looks like, [click here to watch a video of Kuri entertaining my kitty,
Winston](https://youtu.be/h3pEcN6-Yxc).