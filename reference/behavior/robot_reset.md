# Robot Reset and Removal from Account

This covers the various types of reset and shutdown

# Forced Shutdown

This is the least aggressive of all the types of robot resets.

## Requirements Specification

- The user shall have a way to shutdown all of Kuri's subsystems, which include
  the high-speed board, the depth sensor, and all the microcontrollers.
- The process does not result in the deletion or loss of any user data,
  including the robot's map and waypoints, media, Wi-Fi credentials, etc.
- The process does not result in the deletion or loss of any robot configuration
  files, such as authentication credentials, e.g., MQTT and SoundHound.
- This process shall not require or even assume that Kuri is connected to the
  Internet or that Kuri is accessible from the mobile app via Bluetooth LE.
- The process shall allow the high-level `gizmo` software to run through any
  animations and other user experience-enhancing steps before shutting down.

## Technical Design Specification

This shutdown shall be implemented by power cycling Kuri, which will result in 
all subsystems shutting down. A user can then turn Kuri back on again.

- The user powers down Kuri by holding the rear power button for 5+ seconds
  - This power down process permits `gizmo` to shut down gracefully.
- At this point Kuri is powered off and all subsystems are shut down.
- The user then presses Kuri's back power button once and releases.
- Power is restored to the entire system, resulting in the high-speed board
  and the depth sensor (re)booting and the microcontrollers (re)starting.

# Software Reset

This is a more aggressive type of robot reset in that it results in data and
configuration being deleted from the Kuri being reset as well as the cloud.
Specifically, this process clears all user data from Kuri's file system
and also dissociates Kuri from the user's account in the cloud.
It is dubbed "Software Reset" because the process requires the mobile app.

## Assumptions & Preconditions

- The user is logged into the corresponding account in the mobile app.
- Kuri is connected to the Internet.
- Kuri's high-level `gizmo` software is operating normally.

## Requirements & Postconditions

### Onboard

- All [user data](../definitions.mds) is removed from Kuri's onboard storage.
- Kuri's configuration is reset to [factory defaults](../definitions.md).
- Equivalently, the _contents_ of the _user data directory_ are deleted.

### Cloud

- Kuri is dissociated with the user's account.
- Kuri's device record is deleted from the AWS IoT Thing Registry.
- The user no longer has access to their moments and other media.
- The user data/media shall remain online and shall be accessible again
  if the user ever re-onboards the same Kuri using the same account.

### Mobile

- The user shall be prompted for a password in order to confirm the reset.
- If the user initiates a reset while their Kuri is offline, the mobile app
  shall warn the user that onboard data cannot be automatically removed.
- The mobile app shall show a confirmation that the robot has been reset
  and removed from the user's account.
- The user is logged out and the app transitions back to the log in screen.

## Technical Design Specification

This subsection provides design details on the implementation of _some_
of the requirements above, especially at the interface between subsystems.

The _software reset_ functionality is implemented via a combination of HTTP
requests, MQTT messages, and ROS messages. Specifically:

- When the user initiates a reset in the mobile app, the app makes a request:

  ```
  PUT /robots/{robotUUID}/reset
  ```

- The cloud service then sends a MQTT message to the corresponding robot:

  ```
  kuri/{deployment_stage}/reset/{robotUUID}
  ```

- The MQTT client on the robot receives the reset message.
- The MQTT client responds in order to acknowledge receipt of the reset request
  with a `CLOUD RESET STARTED` MQTT message on the `robot_reset` topic.
  - It is important that the robot acknowledges the request _before_ the reset
    takes place because the MQTT credentials are deleted during the process.
- Kuri plays a reaction and then lowers its head and closes its eyes.
- Kuri writes a reset marker to the user data folder and initiates gizmo 
  shutdown.
- A script runs during gizmo shut down that checks for the presence of a reset
  marker, and if present, removes the data in the user data folder and reboots
  Kuri.
- Once Kuri has rebooted and on GizmoApp initialization, a script runs that
  checks for the presence of a reset marker, and if present, removes the data
  in the user data folder and reboots Kuri.
- If Kuri attempts to reset 3 times on GizmoApp initialization and is 
  unsuccessful, Kuri gives up and tries to start gizmo processes normally.
  - Giving up prevents Kuri from being in a reboot loop whenever powered on,
    and provides Mayfield with an opportunity to update the software on the
    robot over-the-air to rescue Kuri from being in a bad state

# Hardware Reset

This is similar to the software reset in that it results in data and
configuration being deleted from the Kuri being reset. However, no Internet or
app connection is required. Specifically, this process clears all user data 
from Kuri's file system and then proceeds to shut down. It is dubbed "Hardware
Reset" because the process is intiated by holding down the power and volume 
up buttons.

## Assumptions & Preconditions

- Kuri is powered on and Kuri's high-level `gizmo` software is operating 
  normally.

## Requirements & Postconditions

### Onboard

- All [user data](../definitions.mds) is removed from Kuri's onboard storage.
- Kuri's configuration is reset to [factory defaults](../definitions.md).
- Equivalently, the _contents_ of the _user data directory_ are deleted.

## Technical Design Specification

This subsection provides design details on the implementation of _some_
of the requirements above.

- When the power and volume up buttons are pressed, a reset timer is started.
- Once the timer expires, a non-blocking MQTT message of `HW RESET STARTED`
  is published on the `robot_reset` topic.
- Then, via a callback or other mechanism, a ROS message is published.
- The reset mechanism implements a ROS subscriber and thus receives the message.
- Kuri plays a reaction and then resets its head.
- Kuri writes a reset marker to the user data folder and initiates gizmo 
  shutdown.
- A script runs during gizmo shut down that checks for the presence of a reset
  marker, and if present, removes the data in the user data folder and reboots
  Kuri.
- Once Kuri has rebooted and on GizmoApp initialization, a script runs that
  checks for the presence of a reset marker, and if present, removes the data
  in the user data folder and reboots Kuri.
- If Kuri attempts to reset 3 times on GizmoApp initialization and is 
  unsuccessful, Kuri gives up and tries to start gizmo processes normally.
  - Giving up prevents Kuri from being in a reboot loop whenever powered on,
    and provides Mayfield with an opportunity to update the software on the
    robot over-the-air to rescue Kuri from being in a bad state

# Considerations of Forced Shutdown & Hardware Reset Behavior
Since hardware reset is triggered using the power and volume up buttons and 
shutdown is also triggered using the power button, it is necessary to acknowledge 
and handle situations where the user intent (as understood by Kuri) changes.

- When the power button is pressed, Kuri starts the shutdown timer (3 seconds).
- If the volume up button is pressed when the power button is pressed, Kuri starts 
  a reset timer (5 seconds) instead of a shutdown timer.
- If the volume up button is pressed before a shutdown timer expires, the shutdown 
  timer will be cancelled and a reset timer will be started. 
- If either the power button or volume up button is released while a reset timer 
  is running, the reset timer will be cancelled.
- If a reset timer is cancelled because the volume up button is no longer pressed,
  but the power button remains pressed, a shutdown timer will be started after
  the reset timer is cancelled.

