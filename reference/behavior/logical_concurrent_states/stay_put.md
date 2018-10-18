# Stay Put

Sometimes Kuri should stay where she is because the user wants her to take photos or the user is listening to music. Kuri can still move its head and rotate its body, but it will not wander to other waypoints

## Preconditions

* The stay put timer is active OR Kuri is playing music

## Behavior

* The stay put timer
  * The timer start when Kuri is given the [voice command](../commanded_behavior/listening.md) "Hey Kuri, stay put."
  * The stay put timer is active for 120 minutes unless interrupted by the following:
    * The battery reaches [critical level](../named_constants.md)
    * Any "Go to Waypoint" [voice command](../commanded_behavior/listening.md)
    * Any "Wander" [voice command](../commanded_behavior/listening.md)
* [Picking up the robot and putting it down](../commanded_behavior/picked_up.md) will not interrupt or cancel stay-put
* Saying "Hey Kuri, Stay Put" while the robot is already staying put will reset the timer to start counting from the most recent command to stay put 
* While staying put, [wander](../automous_behavior/wander.md) will turn in place and take pictures, but will not navigate to new waypoints
* While staying put, Kuri will not [dispatch](../autonomous_behavior/dispatch.md) a go to dock command if unable to wander
* While staying put, Kuri will not fall asleep from [dispatch](../autonomous_behavior/dispatch.md)


## Post Condition

* The robot is free to move between waypoints while wandering, or to navigate back to the dock when wander is not possible
