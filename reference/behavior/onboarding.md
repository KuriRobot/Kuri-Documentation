# Onboarding (Unboxing and Initial Mapping)
Out of the box, Kuri must be paired with a user and have its credentials set up so that it can talk to the cloud.  It must then be manually driven around the user's house to map the space.  This process is refered to as 'unboxing' and 'initial mapping'

## Unboxing
When Kuri is turned on for the first time, it will appear to be asleep. The user must set up Kuri using the Kuri app.  Once the app is used to set up Kuri, it will prompt the user to touch Kuri on the head to wake it up.

### Unboxed - Asleep
* Kuri will appear to be asleep. Kuri will react to touch with an animation that will not open the eyes. Kuri will not react to other input, including to being picked up.
* The app will prompt the user to put Kuri on the dock
* The user must first configure the wifi network for Kuri
* Then the user must associate Kuri with their account
* Once this happens, the app will connect to MQTT and WebRTC to the robot and send a configured command over WebRTC
* At this point, the app will prompt the user to touch Kuri on the head
* If Kuri is docked, configured, and touched on the head, it will exit unboxing and be ready for Initial Mapping.

## Initial Mapping
Initial mapping is the state in which Kuri is driven around the environment to generate a map.

Once Kuri is awake on her dock after unboxing, the app sends the slam_start command to begin initial mapping. This causes Kuri to record her dock location, begin mapping, and `automatically undock`. When the robot SLAM_MAPPING status indicates this undocking is finished, the user will be able to drive the robot as described in the Drive section below.


During initial mapping, Kuri works the same way as it does during normal operation with the following exceptions:

* If Kuri is [kidnapped](events/kidnapped.md) at any time during initial mapping, he will stop responding to teleop inputs and the user will be required to place Kuri back onto the dock to resume the mapping process. This is indicated by the SLAM_FAILED status

* **Automatic Undock**
    * During automatic undock, Kuri will not respond to most imputs (teleop, cap touch)
    * If Kuri is [picked up](events/picked_up.md) while undocking, it is returned to beginning of initial mapping.  The user will be required to restart initial mapping.  Note this is different from the rest of initial mapping which requires kuri being [kidnapped](events/kidnapped.md)
    
* **First Moment Capture**
   * Once Kuri undocks, the app guides the user to have Kuri capture a 'first moment' that will be shown at the end of onboarding
   * The app triggers first moment capture by sending 'capture' on the Command topic
   * The app knows capture is finished when the TOUR2_INITIAL_USER_MAPPING status in the TOUR2 domain has 'first_moment_captured': true in its data dictionary
   * This same data payload will also indicate that a first moment has already been captured if Initial Mapping is restarted

* **Navigation**
    * Kuri is able to save waypoints, but Kuri is not able to navigate to waypoints (Onboarding is a pre-condition of [Drive to Waypoint](commanded_behavior/drive_to_waypoint.md))

* **Autonomous Behavior**
    * Kuri does not sleep
    * Kuri does not time out from bored to wander (Onboarding is a pre-condition of [Wander](autonomous_behavior/wander.md))
    
* **Saving Waypoints**
    * When a user pushes the "+" button in the app to add a new waypoint to the map, the app will display a modal to name the current waypoint. While the user is entering the waypoint name, Kuri will perform a "curious" animation to better scan the area near the waypoint.
    * When the user selects save for the newly named waypoint, Kuri will save the waypoint and play a "chirp" to indicate the new discovery. The app will return the user to drive controls, and any previously playing animations will be interrupted by drive commands.
    * When the user selects cancel for the waypoint, no waypoint will be saved on the robot, and the app will return the user to drive controls. Any previously playing animations will be interrupted when a drive command is received.

* **Drive**
 * During Initial Mapping, Kuri responds to Twist messages from the app by entering the Drive Tour state
 * In the Drive Tour state, Kuri plays head animations that correspond to the Twist messages
 * Kuri plays head motions to alive as she is driving forward
 * This state does not time out, Kuri will look around when she is stopped but not move her base
 * Interacting with the robot (head touch, etc) will exit this state

## Ending Onboarding
To end on-boarding, the robot needs to be near the dock.  The user will select 'end tour' in the app.

* If Kuri is in a position to ILS navigate to the dock  Kuri will [automatically dock](autonomous_behavior/dock.md) and play the `*docking complete awake*` animation, otherwise the user will be prompted to drive Kuri back to the dock
* Once Kuri is docked the process of finalized the map will begin
    * Kuri will advertise the amount of work remaining to finalize the map so the app can prompt the user to wait
    * Once the map is finalized, the app will display it and prompt the user to accept the map or continue initial mapping.
    * While the app is waiting for the user to respond, Kuri will play the `scripted idle` animation
    * If the user accepts the map, then onboarding will end and Kuri will be considered 'Onboarded.' Kuri will archive the map made, and then mark it for uploading to the cloud. At the end of Initial Mapping, Kuri will immediately begin to wander.
    * If the user rejects the map, Kuri will `automatically undock` and mapping will start again.  The user's previous map will not be deleted - rather it will be added to.

## Postconditions
* Kuri is now considered 'onboarded'

