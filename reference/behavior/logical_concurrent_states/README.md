# Logical Concurrent States

Some states of the robot are maintained concurrently with Kuri's state machine.  Instead of controlling Kuri's behavior, these logical concurrent states reflect something about Kuri's state in the world.  For example, if Kuri may be "lost" if someone picked the robot up and put it down in a different place.  This "Lost" state would persist concurrently with Kuri's commanded and autonomous behaviors until corrected by an action from the user or from the robot.

## List of logical concurrent states
* [Charging](charging.md)
* [Lost](lost.md)
* [Observer Mode](observer_mode.md)
* [Override Mode](override_mode.md)
* [Pedestal](pedestal.md)\
* [Battery Critical](battery_critical.md)
* [Stay Put](stay_put.md)
