# Dock Relocation Flow

This flow works in conjunction with the map making flow (which uses the `TOUR2` and `SLAM` domain) to define a procedure allowing users to move their dock.

The overall process is as follows:

* The robot starts onboarded with a map and on the dock, with the dock in the
   location that it was onboarded with.
* The app sends two commands, one to start the resume mapping flow
   (`slam_resume`), and another to start the dock relocation flow
   (`move_dock_start`).
* Through the app, a user teleops the robot to the location of the new dock
   and pushes a button on the screen to indicate the current position as the
   new dock location.
* The robot determines whether the location is in the existing map or
   not and changes the `MOVE_DOCK` status to either
   `MOVE_DOCK_IN_KNOWN_AREA` or `MOVE_DOCK_IN_NEW_AREA` respectively.

If the location is in the existing map:

* The app will send a `slam_discard` command to discard the
  in-progress map (as there's no need to update the map if the new
  dock is in a known area).

If the robot is not in the existing map:

* The app directs the user to finish mapping (resume_mapping.md)[(see the map making flow)] by
  teleoping the robot back to the old dock's location.
* Once the dock is visible, the app should send the `dock_ils` command to
  tell the robot to dock in order to finish its new map.

In both cases the flow finishes with:

* The app sends a `move_dock_drive_near_new_dock` command, causing the
  robot to drive to the docking waypoint of the new dock.  This moves
  the robot out of the dock's location so that the app can ask the user
  move the dock to the new location.

* The app prompts the user to confim the dock is ready in the new
  location. When confirmed app sends the `dock_ils` command to
  request that the robot dock with the dock in its new pose.  Upon
  making contact with the dock, the robot updates its memory of the
  dock's location and the flow ends. If automatic docking fails, the
  user can drive the robot using telop controls to dock to the dock
  in its new location.


# API

This API is designed so that the `MOVE_DOCK` domain status will inform the app
which step of the move dock flow the robot is in as needed, and the app will
send commands causing the robot to perform behaviors that'll move it through
the flow.  Additionally, the app will send mapping, docking, and driving
commands in parallel to control those other processes in the same way that the
app interacts with them in other flows.

## Statuses:

The status domain for this flow is `MOVE_DOCK`, and they represent an
event-based state machine on the robot side:

- `MOVE_DOCK_INACTIVE`: State where new dock flow is not active.
  - Possible next states: `MOVE_DOCK_STARTED`.

- `MOVE_DOCK_STARTED`: The robot received the `move_dock_start`
   command and the move dock flow has started.
   - Possible next states: `MOVE_DOCK_IN_NEW_AREA`, `MOVE_DOCK_IN_KNOWN_AREA`,
   `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_IN_KNOWN_AREA`: Resulting state upon receiving the
  `move_dock_at_new_dock_pose` command if the robot is in the existing map.
  - Possible next states: `MOVE_DOCK_DRIVING`, `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_IN_NEW_AREA`: Resulting state upon receiving the
  `move_dock_at_new_dock_pose` command if the robot is not in the existing map.
  - Possible next states: `MOVE_DOCK_DRIVING`, `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_DRIVING`: Kuri is driving to the docking waypoint of the new dock.
  - Possible next states: `MOVE_DOCK_DRIVING_FAILED`, `MOVE_DOCK_WAITING`,
  `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_DRIVING_FAILED`: Kuri was not able to drive to the new docking
  waypoint because of obstacles, blockages, etc.
  - Possible next states: `MOVE_DOCK_SUCCEEDED`, `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_WAITING`: In this state, the robot is waiting to make contact with
  the dock in its new location, and will record the new dock location upon
  making contact with the dock.
  - Possible next states: `MOVE_DOCK_SUCCEEDED`, `MOVE_DOCK_FAILED`.

- `MOVE_DOCK_SUCCEEDED`: Resulting state if the robot was able to make contact
  with the dock at its new location and was able to update its belief about
  where the dock is. It will transition from this start to MOVE_DOCK_INACTIVE
  automatically after 1 second.
  - Possible next states: `MOVE_DOCK_INACTIVE`.

- `MOVE_DOCK_FAILED`: Resulting state if the robot was interrupted in
  an unrecoverable way during the flow. Any map in progress will be
  discarded. It will transition from this start to MOVE_DOCK_INACTIVE
  automatically after 1 second.  - Possible next states:
  `MOVE_DOCK_INACTIVE`.

## Commands

Commands to the robot are expected to be sent over WebRTC to the topic
`/command` with type `/command gizmo_msgs/Command`, and with the name
field indicating what type of command. For example, to start the dock flow,
it'll look something like the following at the command line:

```bash
rostopic pub /command gizmo_msgs/Command -1 "name: 'move_dock_start'"
```

List of commands used in this flow:

- `move_dock_start`: Used for stating the procedure. Does nothing if called
   after a move dock flow has started. The app should wait for the `SLAM` state
   to be `SLAM_MAPPING` before issuing this command.
    - State change: `MOVE_DOCK_INACTIVE` => `MOVE_DOCK_STARTED`.

- `move_dock_at_new_dock_pose`: Signals to robot that it is positioned on the
   new dock's pose. Causes the robot to decide whether it's in a known or
   unknown area, and remember the pose where it is so that the
   `move_dock_drive_near_new_dock` command would work later.
   - State change: `MOVE_DOCK_STARTED` => `MOVE_DOCK_IN_NEW_AREA` or
     `MOVE_DOCK_IN_KNOWN_AREA`.

- `move_dock_drive_near_new_dock`: Causes the robot to drive to the docking
   waypoint of the new dock. The app should wait for mapping to finish
   before issuing this command, `TOUR2` is `TOUR2_LOCALIZING`.
   - State change: `MOVE_DOCK_IN_NEW_AREA` or `MOVE_DOCK_IN_KNOWN_AREA` =>
     `MOVE_DOCK_DRIVING`

- `move_dock_abort`: Aborts the move dock flow. Discards in-progress resume
   maps.
    - State change: Any => `MOVE_DOCK_FAILED`.

## Events

List of events used in this flow:

- `kidnapped`: This event will cause the flow to fail from any state
   except `MOVE_DOCK_SUCCEEDED`, `MOVE_DOCK_FAILED` or `MOVE_DOCK_INACTIVE`

- `pickedup`: This event will cause the flow to fail from `MOVE_DOCK_WAITING`
   it is ignored in all other states.
