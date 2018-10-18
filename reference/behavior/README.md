# Kuri Behavior Overview
Kuri's behavior is implemented as a state machine that takes asynchronous inputs to transition between states.  The observable behavior of this state machine is specified here.  User commanded behaviors tend to interrupt Kuri's autonomous behaviors.  If no user is interacting with Kuri, then Kuri will eventually time out to autonomous behaviors.

## Interruptions
Kuri's state machine processes inputs asynchronously.  These inputs are called *events*. Each event has a [default behavior](default_event_handlers.md) assosciated with it.  Individual behaviors can override the default behavior for a given event.

## Commanded Behaviors
Below find a list of behaviors initiated by user action.

* [At Attention](commanded_behavior/at_attention.md)
* [Bluetooth Pairing](commanded_behavior/bluetooth_pairing.md)
* [Drive to Waypoint](commanded_behavior/drive_to_waypoint.md)
* [Listening](commanded_behavior/listening.md)
* [Picked Up](commanded_behavior/picked_up.md)
* [Capture on Demand](commanded_behavior/capture_on_demand.md)
* [Dance on Demand](commanded_behavior/dance_on_demand.md)

## Autonomous Behaviors
Autonomous behaviors can be performed automatically by Kuri.  Some autonomous behaviors can be restricted using [Kuri's schedule](schedule.md)

* [Bored](autonomous_behavior/bored.md)
* [Dance](autonomous_behavior/dance.md)
* [Dispatch](autonomous_behavior/dispatch.md)
* [Dock](autonomous_behavior/dock.md)
* [Idle](autonomous_behavior/idle.md)
* [Sleep](autonomous_behavior/sleep.md)
* [Wander](autonomous_behavior/wander.md)

## Live Mode Behaviors
These are behaviors initiated by user action while in override mode.
* [Drive](live_behavior/drive.md)
* [Drive to Image Point](live_behavior/drive_to_image_point.md)
* [Live Navigate](live_behavior/live_navigate.md)
* [Microphone](live_behavior/microphone.md)
* [Play Romoji](live_behavior/romoji.md)

## Mood and Expressiveness
Certain behaviors can affect or be affected by [Kuri's mood](mood.md).
Kuri expresses her emotional state through her [chest light](chest_light.md).

## Structure and Style
Kuri behaviors should have the following sections in the following order where relevant:
* A short free-form paragraph describing the behavior at a high level
* Preconditions - A list of conditions that have to be met for a certain behavior to begin.  See [Wander](autonomous_behavior/wander.md) for a good example
* Behavior - A list of actions and logical conditions that make up the behavior.  See [Sleep](autonomous_behavior/sleep.md) for a good example
* Event Handling - A list of transitions that differ from the [default event transitions](default_event_handlers.md).  See [Picked Up](commanded_behavior/picked_up.md) for an example.
* Postconditions - Any robot state that may have been updated.  See [Picked Up](commanded_behavior/picked_up.md) for an example.
