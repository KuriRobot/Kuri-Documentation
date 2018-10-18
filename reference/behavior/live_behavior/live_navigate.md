# Live Navigate ("Live Mode - Override Navigate")
Live Navigate is the state responsible for navigating to a specific waypoint in 
override mode.  This is logically distinct from 
[drive to point in image](drive_to_image_point.md), the commanded behavior 
[drive to waypoint](../commanded_behavior/drive_to_waypoint.md), and any 
autonomous [wander](../autonomous_behavior/wander.md) behavior.

## Entering Live Navigate
* Waypoint selected from the app

## Preconditions
* Kuri has completed [onboarding](../onboarding.md)
    * Before onboarding is complete, it is not possible to send a waypoint 
    command from the app.
* Kuri is not [lost](../logical_concurrent_states/localization.md)

## Live Navigate Behavior
* Kuri will navigate to the specified waypoint

## Postconditions
* If navigation fails, Kuri is now considered 
[lost](../logical_concurrent_states/localization.md)
* If navigation was interrupted, Kuri does not remember any previous goals
