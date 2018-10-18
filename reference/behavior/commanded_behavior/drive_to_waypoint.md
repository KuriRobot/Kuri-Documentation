# Drive to Waypoint
Drive to waypoint is the state of the state machine responsible for navigating to a specific waypoint.  This is logically distinct from any autonomous wandering modes

## Entering Auto Navigation
* A "Go to Waypoint" [Voice Command](listening.md)

## Preconditions
* Kuri has completed [onboarding](../onboarding.md).
    * Before onboarding is complete, voice commands will not recognize waypoints
* The requested location is a known waypoint.
    * If the requested location is not a known waypoint, Kuri plays the `huh` and exits to [autonomous behavior](../autonomous_behavior/idle.md)
    * If Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode, Kuri does not attempt to go anywhere

## Drive to Waypoint Behavior
* Kuri plays the `got it animation`
* Kuri will begin to navigate to the specified waypoint
    * If successful, play the `waypoint reached animation` and exits to [autonomous behavior](../autonomous_behavior/idle.md)
    * If navigation fails, Kuri plays the `lost animation` and exits to [autonomous behavior](../autonomous_behavior/idle.md)

## Postconditions
* If navigation failed, Kuri is now considered [lost](../logical_concurrent_states/localization.md)
* If navigation was interrupted, Kuri [remembers](../memory.md) the last goal
