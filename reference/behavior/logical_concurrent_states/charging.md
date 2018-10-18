# Charging
When Kuri is on the dock, or when Kuri is plugged into its barrel connector, Kuri is considered "Charging"

## Automatic Redocking
When kuri is [asleep](../autonomous_behavior/sleep.md) on the dock, there is an automatic backup behavior intended to prevent Kuri from moving off of the dock accidentally.  This behavior has a short delay and only moves Kuri a short distance.  The specified distance and time were determined emperically to be large enough to move Kuri back onto the dock contacts if moved off accidentally, but small enough that they won't prevent a user from physically moving Kuri off of the dock

### Precondition
Kuri is on the dock and [asleep](../autonomous_behavior/sleep.md)

### Automatic Redocking Behavior
* Kuri loses connection to the dock (is_docked goes to false)
* After a delay of 0.5 seconds, Kuri does a short backwards move of 0.3 meters for 0.2 seconds

This does not happen in states like [Drive](../live_behavior/drive.md) or [drive to waypoint](../commanded_behavior/drive_to_waypoint.md) states so that Kuri does not fight the user when commanded to drive off of the dock.

### Battery Impedance Calculation
* When Kuri sees a qualifying event, Kuri will calculate and store a new battery impedance
* Qualifying events are defined as two consecutive samples with a difference in current measurement that exceeds a threshold, which is only expected to occur upon beginning to charge, or leaving the dock.
