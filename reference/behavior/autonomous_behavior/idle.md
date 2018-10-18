# Idle
Idle is a transitional state in the Kuri Soul state machine.  It introduces a
 short delay before autonomous behaviors start, and acts as a dispatcher 
 state for autonomous behaviors.

## Preconditions
* There are no preconditions for the idle state.  Most states will time out 
to the idle state

## Idle Behavior
* The idle state will last for up to one second
    * If Kuri is on the dock, transition to [sleep](sleep.md) unless Kuri is 
    in [Pedestal](../logical_concurrent_states/pedestal.md) mode
    * If Kuri's battery level is [critical](../named_constants.md), attempt 
    to [navigate back to the dock](dock.md) unless Kuri is in 
    [Pedestal](../logical_concurrent_states/pedestal.md) mode
    * If Kuri is not on the dock, transition to [bored](bored.md)
    * If Kuri is in override mode, the robot does nothing and no autonomous 
    behaviors are dispatched
