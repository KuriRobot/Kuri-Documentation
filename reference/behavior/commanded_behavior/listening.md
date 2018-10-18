# Listening
After Kuri hears the wake-word "Hey Kuri," Kuri enters a state where it attempts to transcribe the command that follows the wake-word

## Entering Listening
* Kuri hears the wake-word "Hey Kuri"

## Preconditions
* None

## Listening Behavior
* Kuri puts its head up and turns on a blue chest LED (`the listening animation`)
* Kuri begins to transcribe audio
    * The maximum transcription length is 7.5 seconds
    * An internet connection is required to transcribe audio.  If Kuri does not have an internet connection, listening will trigger a "huh" animation and time out to [autonomous behavior](../autonomous_behavior/idle.md) after the duration for a maximum length transcription has passed (or 10 seconds, if no maximum length can be determined).
    * If no audio is detected, listening will trigger a "huh" animation and time out to [autonomous behavior](../autonomous_behavior/idle.md) after the duration for a maximum length transcription has passed (or 10 seconds, if no maximum length can be determined).
    * Tapping Kuri on the head will dismiss Listening and transition to [autonomous behavior](../autonomous_behavior/idle.md)
* If `--enable-wakeword-turn` is set, Kuri turns its head and its body towards the direction that it heard "Hey Kuri" coming from
    * Kuri's head will turn faster than its body, but the body will 'catch up' to the head so that the end-pose has Kuri's head centered on its body and facing the direction of the detected "Hey Kuri"
    * Kuri will not turn her body in the direction of sound if Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode.
    * When the turn is complete (while still transcribing), Kuri will invoke [Face Tracking](../face_tracker.md)
* Once transcription is complete, attempt to process the transcribed audio as a command and stop maintaining eye contact with the user

## Commands
Following is a list of commands understood by Kuri.  Commands are grouped into categories called *intents*

### Go to Waypoint
The following voice commands are interpreted as "go to waypoint." None of these commands will result in Kuri moving if Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode.

| User Says | Transition |
| --- | ---|
| Go to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Meet me at *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Meet me in *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Come to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Get your butt to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Walk to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Roll to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Autonomously navigate to *place* | Attempt to [navigate to](drive_to_waypoint.md) *place* |
| Go charge | Attempt to [return to the dock](../autonomous_behavior/dock.md)|
| Go dock | Attempt to [return to the dock](../autonomous_behavior/dock.md)|
| Go home | Attempt to [return to the dock](../autonomous_behavior/dock.md)|
| Go away | Attempt to [return to the dock](../autonomous_behavior/dock.md)|

### Sleep
The following commands will cause Kuri to [go to sleep](../autonomous_behavior/sleep.md) at its current location
* Go to sleep
* Sleep
* Eyes Closed
* Close Eyes
* Close your eyes

### Stay Put
["Hey Kuri, Stay Put"](../logical_concurrent_states/stay_put.md) will prevent Kuri from moving from its current location for 120 minutes.

### Stop
"Hey Kuri, Stop" will cause the robot to stop whatever it is currently doing (playing music, wandering).  After stopping, Kuri will time out to [autonomous behavior](../autonomous_behavior/idle.md)

### Play
The following commands are interpreted as "play" commands

| User Says | Transition |
| --- | --- |
| Play pancake robot <br>Play your favorite song | Play the song "Pancake Robot" and time out to [autonomous behavior](../autonomous_behavior/idle.md) |
| Play Happy Birthday | Play the song "Happy Birthday" and time out to [autonomous behavior](../autonomous_behavior/idle.md) |

### Bluetooth
The following voice commands are for requesting that Kuri changes her bluetooth connection status.

| User Says | Transition |
| --- | ---|
| Pair with my device <br>Connect <br>Pair with a new device | Enter [bluetooth pairing](../commanded_behavior/bluetooth_pairing.md) |
| Disconnect | Play the `got it` animation, disconnect from any connected bluetooth device, and time out to [autonomous behavior](../autonomous_behavior/idle.md)|

### React
The following commands will trigger a romoji-like reaction from Kuri

| User Says | Transition |
| --- | --- |
| I Love You | Play the `I love you` animation |
| Fart | Play the `fart` animation |
| Are you lost? | Play the `yes` animation if mapping indicates we are lost, otherwise play the `no` animation |

### Turn & Move
The following voice commands will trigger Kuri to move or turn

| User Says | Transition |
| --- | --- |
| Turn left | Turn 90 degrees to robot left and wait at attention |
| Turn right | Turn 90 degrees to robot right and wait at attention |
| Turn around | Turn 180 degrees and wait at attention |
| Move left | Turn 90 degrees to robot left, move forward 1 meter, and turn back to original heading |
| Move right | Turn 90 degrees to robot right, move forward 1 meter, and turn back to original heading |
| Move backwards | Without turning, back up 1 meter |
| Move forward | Move forward 1 meter |
| Turn _n_ degrees | Turn _n_ degrees and wait at attention |
| Move _direction_ _distance_ _unit_ | Turn _direction_, move _distance_ in _unit_, and turn back to original heading |

### Wander
The following commands will cause kuri to start [wandering](../autonomous_behavior/wander.md) if the preconditions for commanded wander are met:

* Wander
* Go Wander
* Go Wandering
* Explore
* Go Explore
* Go Exploring

### Capture on Demand
The following commands will cause kuri to [capture a moment](../autonomous_behavior/capture_on_demand.md) if the preconditions for commanded photo shoot are met:

Any of the words from the following three groups:
* [ Take | Capture | Snap | Record ]
* [ a | an | another]
* [ Picture | Photo | Video | Snapshot | Moment | Capture | Recording ]

E.g. "Take a picture", "Capture a Moment", "Snap another Recording", etc.

## Postconditions
* Unless otherwise specified by the command, transition to [autonomous behavior](../autonomous_behavior/idle.md)
