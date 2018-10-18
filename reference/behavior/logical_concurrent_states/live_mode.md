# Live Mode
Live mode is divided into two categories, Observer Mode and Override Mode

## Observer Mode
### Purpose
Observer mode allows users who are physically interacting with the robot to know when another user is remotely connected to the robot and viewing the video stream through Kuri's eyes.

### Pre-Conditions
A minimum of one webrtc connection is made to the robot.

### Behavior
* When the robot enter observer mode we play the teleop start sound, https://github.com/mayfieldrobotics/assets/blob/develop/sounds/teleop_start.wav.
* The robot then pulses the chest LED red as a temporary animation.
* When the mode ends the robot play the teleop end sound https://github.com/mayfieldrobotics/assets/blob/develop/sounds/teleop_end.wav.
* A message is posted to the RobotStatus domain LIVE_MODE with status OBSERVER_MODE

### Post-Condition
Observer mode ends when the last webrtc connection is terminated.  A message is posted to RobotStatus domain LIVE_MODE with status NOT_CONNECTED

## Override Mode
### Purpose
Override mode allows remote users full control over the robot.

### Pre-Conditions
A webrtc connection is made to the robot. A message is sent to the /command topic with name "override_mode" and params of k: "override_mode" v: "on".

### Behavior
A message is posted to RobotStatus domain LIVE_MODE with status OVERRIDE_MODE
The rules engine can query whether the robot is in observer mode

### Post-Condition
Override mode ends when the last connection is terminated (as above) or when a message is send to /command with name "override_mode", k: "override_mode", v: "off"

## Connection Service
- Tracks whether there are webrtc connections, how many etc
- Plays sounds to indicate entry, exit
- Displays appropriate LED animation
- Tracks override vs observer mode
