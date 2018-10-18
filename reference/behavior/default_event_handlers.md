# Events and Default Transitions
The following events are caused by a user interacting with Kuri.  Unless overridden by the state that Kuri is in, these events will cause Kuri to transition to a behavior

| Event | Description | Default Transition |
| :--- | :--- | :--- |
| geometry_msgs.msg.Twist | Joystick driving from App (in [Override Mode](logical_concurrent_states/override_mode.md)) | [Drive](live_behavior/drive.md)  |
| geometry_msgs.msg.HeadPose| User pan/tilts the robot's head (in [Override Mode](logical_concurrent_states/override_mode.md)) | [Drive](live_behavior/drive.md) |
| NavigationGoal | User taps a point for Kuri to drive to (in [Override Mode](logical_concurrent_states/override_mode.md))) | [Drive to Image Point](live_behavior/drive_to_image_point.md) |
| RomojiGoal | User selects a Romoji from the list (in [Override Mode](logical_concurrent_states/override_mode.md))| [Play Romoji](live_behavior/romoji.md) |
| NavigationGoal | User selects a waypoint from Kuri's list of saved waypoints (in [Override Mode](logical_concurrent_states/override_mode.md)) | [Live Navigate](live_behavior/live_navigate.md) |
| touch_event (tap, hold, hold end, tickle) | User touches Kuri's head and stops touching Kuri's head | [Find Face](commanded_behavior/find_face.md) |
| [Pick-up](events/picked_up.md) | Kuri's wheels drop | [Picked Up](commanded_behavior/picked_up.md) |
| [Kidnapped](events/kidnapped.md) | Kuri's wheels drop and remain dropped for a short time | Kuri forgets goals |
| mayfield_audio.msg.Awake | Kuri hears the wake-word "Hey Kuri" | [Listening](commanded_behavior/listening.md) |
| Critical Battery | Kuri's battery level is critically low | [Dock](autonomous_behavior/dock.md) |
| Sleep | Kuri receives a "sleep" command | [Sleep](autonomous_behavior/sleep.md) |
