# Play Romoji ("Live Mode - Override Romoji")
In the Romoji state, the user can manually trigger animations on Kuri

## Entering Romoji
* Romoji is entered when the user is in 
[override mode](../logical_concurrent_states/override_mode.md), switches to 
the "Romoji" tab in the app, and sends a RomojiGoal message. 

## Preconditions
* The robot must be in 
[override mode](../logical_concurrent_states/override_mode.md)

## Play Romoji Behavior
* Kuri will play the romoji specified by the user
    * If another romoji is already playing, the first romoji is interrupted
