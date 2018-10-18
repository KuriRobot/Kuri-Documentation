# Drive to Image Point
In this state, Kuri autonomously navigates to a point in Kuri's vision chosen
 by the user.
 
> NOTE: This is not supported in the Kuri app for `cupcake`

## Entering Drive to Image Point
* Entered when the user taps a location in Kuri's vision

## Preconditions
* If Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode, 
Kuri does not attempt to go anywhere

## Drive to Image Point Behavior
* The point the user selected is projected onto the floor and truncated so 
that it is no more than 2 meters from Kuri's current location
* Kuri autonomously navigates to the point selected
* When Kuri arrives at the selected point, Kuri plays the 
`Waypoint Reached Animation`
* Time out to [autonomous behavior](../autonomous_behavior/idle.md)
