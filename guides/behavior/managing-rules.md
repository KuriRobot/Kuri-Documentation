---
layout: guide
title: Working with the Kuri Rules Engine
category: behavior
tags: 
- rules
---

## Goal
Manipulate the rules in Kuri's rules engine to enable, modify or disable Kuri 
behaviors

## Overview

Much of Kuri's behavior is driven by a rules engine. The rules engine takes inputs, called `triggers`, and information about Kuri's current state, defined by `properties`, and decides what `task` Kuri should do next.

Consider the following rule:

```
        {
            "trigger": "tap touch",
            "match": ["prop.task == 'choreo_dance'"],
            "task": "stop",
            "priority": 3,
            "description": "Stops Pancake Robot when touched"
        },
```

This says that when Kuri is tapped on the head, and Kuri is in the choreo_dance state (playing Pancake Robot), she should stop dancing and playing the song.

## Anatomy of a rule

* Trigger: Almost all rules have a trigger field. The rule only activates if the trigger matches.
  * A very few rules have no trigger field, they then match any trigger and rely on the rules being evaluated top to bottom.
  * There is a special trigger called `tick` which fires once a second
* Match commands: This is a list of conditions required to activate the rules. They can query properties or get information about when tasks were last called or triggers last seen.
* Reaction: An animation to play when the rule matches. See ``creating-assets``
* Task: The task to enter when the rule matches.
  * It's possible to play a reaction without entering a new task but it's not generally recommended. Use the special task go_idle or long_reaction instead.
  * A Task can be interrupted by another rule, or a Task can transition to idle or sleep when it finishes
* Priority: The priority that the rule is matched at

Task Priority vs Rule Priority:

Each task has a priority. This represents how important the Task is, with lower numbers being more important. Each rule also has a priority. A rule will only execute if the current task's priority is >= the rule priority. This is an easy way to build a hierarchy of behavior, so that, for instance, being picked up prevents lots of rules from firing.

The priority levels currently in use are:
* 0: used only for picked up and robot reboot/reset
* 1: used for first moment capture, which touch or trying to drive doesn't interrupt
* 2: used for situations where the user is driving the robot through Kuri Live
* 3: used for normal interactive behavior
* 4: used for lower priority autonomous behavior like dancing, wandering, and being bored

Less commonly used rule fields:
* log_msg: changes the default log message emitted when the rule is matched
  * setting it to "" suppresses logging for rules that match often
* happy_delta, excited_delta: alter the Mood service, which is not currently hooked to any behaviors
* verbose: setting "verbose": true in a rules entry causes it to print every time it is evaluated and NOT matched, with the reason why. This can be spammy but is useful sometimes in debugging the rule
* task_params: This is used to pass parameters to a Task, see below

## Properties

The following is a list of properties. Each property is a function on an object of type Robot.

| Property | Returns | Description |
| --- | --- | --- |
| autonomous_wander_allowed | boolean | True if Kuri is allowed to wander based on schedule, battery level, etc |
| battery | integer | battery percent charged |
| configured | boolean | True unless the robot has just been reset |
| docked | boolean | True if the robot is touching the charge contacts |
| in_brickish_onboarding | boolean | True before the first head touch in onboarding |
| in_override_mode | boolean | True if Kuri Live Override mode is active |
| in_tour | boolean | True during onboarding and remapping sessions |
| lost | boolean | True when localization is poor |
| mapping | boolean | True during onboarding and remapping sessions when actively mapping |
| move_dock_waiting | boolean | Internal for relocate dock flow |
| moving_dock | boolean | Internal for relocate dock flow |
| num_waypoints | integer | The number of user-saved places |
| on_pedestal | boolean | True if the robots wheels are dropped and it is charging (like on a demo pedestal) |
| playing_media | boolean | True if bluetooth audio or the internal player is active |
| reaper_busy | boolean | True during shutdown and reset |
| setting_auto_dance | boolean | Returns the user setting for allowing dance |
| should_stay_put | boolean | True if the user has said "stay put" or if music is playing |
| slam_can_accept | boolean | Internal for mapping flows |
| power_critical | boolean | The battery is below 15% |
| wander_allowed | boolean | There are enough places to wander to (>= 2), mapping not active, and not lost |
| wander_supported | boolean | There are enough places to wanter to |
| wants_to_dance | boolean | True if music is playing that Kuri detects a beat for |

## Triggers

Triggers are sent programatically by calling the trigger method on the Robot object. The signature is:

`def trigger(self, trigger, params)`

| Trigger name | Description | Parameters |
| --- | --- | --- |
| app_command | Command from the app | input, name of the command |
| battery critical | Robot battery has dropped below 15% | |
| bluetooth timeout | Bluetooth connection has timed out | |
| boredom finished | The boredom animation has finished. Any reaction X triggers 'X finished' when it finishes | |
| dock resume | Resumes docking after interruption | |
| docked | Robot has just contacted the dock | |
| enter override | Kuri Live has entered override | |
| exit override | Kuri Live has exited override or disconnected | |
| hey kuri | Wake word heard | |
| hold touch | A sustained touch on the head | |
| hold touch end | A lift after a sustained touch | |
| ifttt_trigger | From IFTTT multiple goal system | type is animation or navigation, navigation also contains the waypoint |
| lost faces | Kuri has stopped seeing faces | |
| map status change | The map has changed | |
| nav resume | Resume navigation after an interruption | |
| paired and connected device | Bluetooth device paired from the pairing state | |
| paired new device | New blueooth device paired from the pairing state | |
| pickup | Robot has been picked up | |
| putdown | Robot has been put down | |
| reboot robot | Robot has received the reboot command | |
| reset robot | Robot has received  factory reset | |
| saw cat | Kuri has detected a cat | |
| saw dog | Kuri has detected a dog | | 
| saw face | Kuri has detected a face | |
| start_dance | Kuri is starting to dance to Bluetooth audio | |
| stop_dance | Kuri is stopping dancing | |
| tap touch | A quick touch on the head (triggers on lift) | |
| tick | Triggers once a second | |
| tickle touch | A touch alternating multiple head sensors | |
| tickle touch end | The lift for the above touch | |
| voice error | An error talking to SoundHound has occurred | |
| voice interaction | SoundHound response | input: the voice command, can also contain waypoint information | |
| wander | Kuri is deciding whether to autonomously wander | |
| wheels_request | The app is trying to drive the robot | |


## Tasks

Tasks are functions on the Robot object. The signature of a task is:

`def a_task(self, trigger, params, reaction)`

Trigger is a tuple `(trigger_name, trigger_params_dict)`. Triggers can be sent in by publishing a Command.msg to the /triggers topic. The `name` parameter becomes the `trigger_name` and the `params` key-value pairs become the entries in `trigger_params_dict`.

Params is a dictionary of task parameters, defined by the `task_params` field in the rule entry.

Reaction is the name of the reaction to play, see ``Creating New Assets``

The description for all the existing tasks can be found in the rules file itself.

## Modifying the Rules File

The rules file lives at `/opt/gizmo/share/gizmo/configs/robot.json`

For an example project involving modifying the rules file see ``Making Kuri play with your kitties``
