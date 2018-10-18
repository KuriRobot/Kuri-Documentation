# Dock
The dock state has two parts.  First, Kuri will autonomously navigate to a waypoint near the dock.  Second, Kuri will perform ILS navigation to get onto the dock

## Preconditions
* Kuri has completed [onboarding](../onboarding.md).
* Kuri is not [lost](../logical_concurrent_states/localization.md)
     * If Kuri is lost, Kuri plays the `lost animation` and exits to [autonomous behavior](../autonomous_behavior/idle.md)

## Dock Behavior
* Kuri begins to autonomously navigate to a waypoint near the dock
* Once Kuri arrives at the waypoint, play the `waypoint reached animation` and begin ILS docking

## ILS Docking Behavior
ILS docking uses an IR beacon emitted from the dock to orient Kuri and guide the robot to the center of the dock

* Kuri uses ILS docking to get close to the dock
* Kuri turns around and uses ILS docking to back onto the dock.
* Once on the dock, play the `docking complete animation`
    * Note that there are two forms of the docking complete animation.  The default is 'docking complete asleep' unless otherwise specified
* Exit to [autonomous behavior](../autonomous_behavior/idle.md)
