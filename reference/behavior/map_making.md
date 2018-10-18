# Map Making Flow

On the robot side from the perspective of mapping, creating a map during
onboarding, resuming a map, and resetting the map all has pretty much the same
exact set of steps and this spec is intended to reflect that fact.

The overall process is as follows:

1. The robot starts on the dock, and either has no map, or is using an
   existing map.
1. An app command initiates a new mapping session, or asks to resume the map
   that's being used.
1. The robot starts mapping, and plays the undock and scan animation.
1. Through the app, a user teleops the robot through their space, and adds
   places.
1. At some point, the robot will be driven back to the dock. And when the app
   detects that the robot is in the dock LED overlap region, it will ask the user
   whether the robot should dock, then the app will send a command telling the
   robot to use its dock LED based docking routine.
1. Through the app, the controlling user will then be asked whether the map is
   complete, and the decision sent to the robot as a command. The process
   either continues with the robot undocking, or the map will be closed.
1. Depending on how much mapping lags, Kuri will play an animation while the
   map is closing.

# API

The guiding principle of the robot side API is that statuses will tell the app
which state of the mapping process the robot is in, and what type of mapping.
To advance through these various states, the app sends commands to a) initiate
and end mapping sessions and b) to control undocking and docking behaviors.
Depending on the command sent, the app will use either mapping specific or
docking specific statuses to determine the state of its commands.

## Statuses

Mapping uses two status domains: `SLAM` and `TOUR2`.

`TOUR2` is the domain used for overall status of the mapping stack. These are
intended for the app to use to tell whether the robot is mapping and what type
of mapping it's doing. The statuses in it are:
- `TOUR2_NO_MAP`: robot has no map, and needs to be onboarded.
- `TOUR2_INITIAL_USER_MAPPING`: sent during the mapping portion of onboarding
  (after SLAM has started).
- `TOUR2_USER_MAPPING`: a new map is being added (so during the reset mapping
  flow).
- `TOUR2_USER_RESUME_MAPPING`: robot is adding to an existing map.
- `TOUR2_LOCALIZING`: robot is using an existing map.

When mapping, the robot will be in `TOUR2_INITIAL_USER_MAPPING`,
`TOUR2_USER_MAPPING`, or `TOUR2_USER_RESUME_MAPPING`.  In those states, the
statuses in the `SLAM` domain (which is kept by the state machine in
`gizmo/services/slam/slam_status_tracker.py`) are:
- `SLAM_STARTING`: SLAM has started and the robot is in the process of
  undocking using its undock and scan animation.
- `SLAM_MAPPING`: robot has left the dock and is mapping. The app should send
  teleop driving commands in this state.
- `SLAM_WAITING`: robot has returned to the dock and waiting for input from the
  app (either `slam_accept` or `slam_discard`).
- `SLAM_FAILED`: robot was kidnapped and mapping gave up. Can escape out of
  this by putting the robot back on the dock (status will then be
  `SLAM_WAITING`) or by deleting the map (through `slam_discard`) when the
  `SLAM` domain will change to `SLAM_INACTIVE`.
- `SLAM_FINISHING`: SLAM is finishing up, archiving, & uploading map.
- `SLAM_COMPLETED`: Final state if everything goes right, but very transient as
  it goes then to `SLAM_INACTIVE` immediately after.
- `SLAM_INACTIVE`: Nothing is happening.

In `TOUR2_NO_MAP` and `TOUR2_LOCALIZING` the `SLAM` status will always be
`SLAM_INACTIVE`.

## Commands

Commands to the robot are expected to be sent over WebRTC to the topic
`/command` with type `/command gizmo_msgs/Command`, and with the name
field indicating what type of command. To send an undock command, it'll be
something like the following:

```bash
rostopic pub /command gizmo_msgs/Command -1 "name: 'undock'"
```

The first group of commands used in mapping initiate and control mapping
sessions. Below each command will also be the statuses that the app should
expect to change, and that will indicate whether the command had an effect.
Note that the **BOLD** statuses what the robot-side code expects will be the
most reliable (in case of disconnect or message drops) statuses for a
particular command.

- `slam_start`: starts a new mapping session, and will delete existing open
  sessions. But if there's a map already, it won't be deleted, and the new map
  will merely be added and then set as the default if that map is accepted.
  Requires robot to be on the dock to take effect (should monitor the `POWER`
  domain for `DOCKED`), and the command will be ignored otherwise.
   - **`TOUR2` will change to `TOUR2_INITIAL_USER_MAPPING` or
     `TOUR2_USER_MAPPING`.**
   - `SLAM` will change from `SLAM_INACTIVE` to `SLAM_STARTING`, and then to
     `SLAM_MAPPING`.
   - `BEHAVIOR` will change to `BEHAVIOR_SLAM_STARTING`.
- `slam_resume`: starts a new resume mapping session using whatever map is
  being used. Requires robot to be on the dock (monitor the `POWER` domain for
  `DOCKED`) and for the `TOUR2` status to be `TOUR2_LOCALIZING`.
   - **`TOUR2` will change to `TOUR2_USER_RESUME_MAPPING`.**
   - `SLAM` will change from `SLAM_INACTIVE` to `SLAM_STARTING`, and then to
     `SLAM_MAPPING`.
   -  `BEHAVIOR` will change to `BEHAVIOR_SLAM_RESUMING`.
- `slam_accept`: Tells SLAM to finish processing data, archive, upload, and
  close a currently open mapping session. Only works if robot is on the dock
  (monitor the `POWER` domain for `DOCKED`) and has at least 2 places.
   - **`TOUR2` status will keep the same value throughout the command but then
     change to `TOUR2_LOCALIZING` after SLAM finishes (either successfully or
     unsuccessfully, in the later case there won't be a `SLAM_COMPLETED`
     status).**
   - `SLAM` will change from `SLAM_WAITING` to `SLAM_FINISHING`,
     `SLAM_COMPLETED` (only if no errors occur), and finally to
     `SLAM_INACTIVE`.
   -  `BEHAVIOR` will change to `BEHAVIOR_SLAM_ACCEPTING`.
- `slam_discard`: discards whichever mapping session is currently active.
   - **`TOUR2` status will change to `TOUR2_LOCALIZING` or `TOUR2_NO_MAP`.**
   - `SLAM` status will change to `SLAM_INACTIVE`.

The next two commands gives the app actions to perform when the robot near and
at the dock. `dock_ils` is expected to be used while in `SLAM_MAPPING`, when
the robot is close to the dock,  and if the user agrees that the robot should
dock. In contrast, `undock` is expected to be used while in `SLAM_WAITING` to
undock, and continue the mapping process.

- `dock_ils`: docks using the dock's LEDs and the ILS docking procedure. This
  does not use autonomous navigation to get to the dock waypoint, and it will
  only work if the docking LEDs are visible. The `DOCK_SENSOR` status should
  read `DOCK_VISIBLE` when this action starts, and the `POWER` status should be
  `UNDOCKED`. Use a combination of the `BEHAVIOR` and `POWER` domain status to
  know whether this command is executing and whether it succeeds.
   - `TOUR2` status remains unchanged.
   - `SLAM` will change from `SLAM_MAPPING` to `SLAM_WAITING` if docking
     succeeds.
   - `BEHAVIOR` status will change to `DOCKING` and then out of it once the
     procedure finishes.
   - `POWER` status will change from `UNDOCKED` to `DOCKED`.
- `undock`: plays the undock and scan animation. Will only work if robot is
  currently on the dock (`POWER` status reads `DOCKED`). Use a combination of
  the `BEHAVIOR` and `POWER` domain status to know whether this command is
  executing and whether it succeeds.
   - `TOUR2` status remains unchanged.
   - `SLAM`, if in `SLAM_WAITING`, will change from `SLAM_WAITING` to
     `SLAM_MAPPING`.
   - `BEHAVIOR` status will change to `BEHAVIOR_UNDOCKING`.
   - `POWER` status will change from `DOCKED` to `UNDOCKED`.


# Flows Using This Spec

This spec is designed to be used in all three mapping flows but currently, it
is expected to be used only for the reset map flow. If the above statuses are
used for the existing complex onboarding, and resume mapping flows, the `SLAM`
domain statuses are not guaranteed to be correct.

## Reset Map

Reset mapping will use the `slam_start`, `slam_discard`, and `slam_accept`
commands to control the mapping session, and `dock_ils` to put the robot in a
physical position to use `slam_discard`, and `undock` to continue mapping
should the user decide to do so when the robot is on the dock.
