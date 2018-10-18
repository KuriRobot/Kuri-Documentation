# Picked Up
This state occurs when Kuri is physically lifted off of the ground

## Entering Picked Up
* Entered when the wheel drop sensors indicate that Kuri has been lifted off of the ground

## Preconditions
* None

## Picked Up Behavior
* Kuri plays the `picked-up animation`
* When put back down, play the `put-down animation`
* Transition to [autonomous behavior](../autonomous_behavior/idle.md)

While picked up, Kuri should not move the wheels or the head. This is meant to prevent Kuri from pinching fingers or clothing while being carried.  To accomplish this, the Picked Up state overrides many of the [default event handler transitions](../default_event_handlers.md)

## Events Handled
The picked up state handles the following events in ways other than the default:

| Event | Description | Default Transition |
| :--- | :--- | :--- |
| geometry_msgs.msg.Twist | Joystick driving from App   | Kuri does nothing  |
| geometry_msgs.msg.HeadPose| User pan/tilts the robot's head | Kuri does nothing |
| TouchDriveServerGoal | User taps a point for Kuri to drive to | Kuri does nothing |
| RomojiServerGoal | User selects a Romoji from the list | Kuri does nothing |
| WaypointFollowerServerGoal | User selects a waypoint from Kuri's list of saved waypoints | Kuri does nothing |
| Cap touch Click | User touches Kuri's head and stops touching Kuri's head | Kuri does nothing
| ros_eerie.msg.Awake | Kuri hears the wake-word "Hey Kuri" | Kuri does nothing |
| Critical Battery | Kuri's battery level is critically low | Kuri does nothing |
| Sleep | Kuri recieves a "sleep" command | Kuri does nothing |

## Postconditions
* If Kuri was moved from its original location or orientation while picked up, Kuri may now consider itself [lost](../logical_concurrent_states/lost.md)
