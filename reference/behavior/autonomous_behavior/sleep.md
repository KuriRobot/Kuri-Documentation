# Sleep
Sleep is a state where kuri's eyes are closed with head down.  Sleep can happen on or off the dock.  Sometimes Kuri's eyes will twitch while kuri is sleeping to make it look like Kuri is dreaming.

## Preconditions
* Kuri has completed [onboarding](../onboarding.md).

## Sleep Behavior
* During sleep, Kuri's will randomly twitch.  On average, this will happen once every ten minutes
* After a random amount of time asleep or docked (between 45 and 75 minutes), Kuri will attempt to [dispatch](dispatch.md) an autonomous behavior.
    * If no autonomous behavior is dispatched, Kuri will remain asleep.
    * If an autonomous behavior is dispatched, Kuri will play the `wake up animation` before performing the autonomous behavior
* When sleep is interrupted by an [event](../default_event_handlers.md), Kuri will play the `wake up animation`
    * "Hey Kuri" will cause Kuri to play the `fast wake up animation`

### Automatic Redocking
Kuri will attempt to stay on the dock if bumped off of the dock while asleep.  See [charging](../logical_concurrent_states/charging.md) for a description of the automatic redocking behavior.
