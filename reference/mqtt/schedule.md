# Schedule

Defines a scheduled behavior for Kuri.

The schedule time is in UTC.  If the local timezone requires that the time goes past the 24 hour clock then the robot is smart enough to know that it is the next day in UTC.

Schedule items can also be selectively enabled and disabled through the enabled flag. This allows a user to disable a schedule while maintaining the schedule information to be re-enabled later.

## MQTT Endpoint Behavior and Usage
The schedule MQTT endpoint is used to communicate the robot schedule from the cloud to the robot. There are three interactions that can happen on the schedule endpoint:

* The robot publishes an MQTT message with an empty payload. This signals the cloud to publish the latest saved schedule.
* The cloud, upon receipt of an MQTT message with an empty payload, publishes the latest saved schedule. If the robot is online, the robot will receive the new schedule and begin to use it.
* The cloud upon having the schedule updated by the app will publish the new schedule to update the robot over MQTT. If the robot is online, the robot will receive the new schedule and begin to use it.

Each time the robot comes online, it should publish an empty MQTT message on to the schedule endpoint so it can receive any schedule updates that may have been sent by the cloud while it was offline.

### Remarks
It may be desirable for the robot to periodically request the schedule from the cloud, instead of attempting to notice each time it comes online. This can provide a robust safeguard to the possiblity of missing the detection of going offline.

The robot may also persist a copy of the schedule locally. This would permit the robot to use a relatively up-to-date schedule when it is turned on without an internet connection. Schedules sent by the cloud are authoritative, and should always replace any schedule that has been persisted locally on the robot.

## REST Endpoint Behavior and Usage
The schedule REST endpoint is used to communicate the robot schedule between the cloud and the app. There are two interactions that can happen on the schedule endpoint:

* The app sends a GET request to the cloud to request the latest saved schedule.
* The app sends a PUT request to the cloud to update the saved schedule. Upon having the schedule updated the cloud will send an MQTT message to the robot to notify it of the new schedule.

## Message Payload Definition
The message payload is JSON containing the following elements:

* start
    * When the schedule starts.
* stop
    * When the schedule stops.
* day:
	* Lowercase english days: 'monday', 'tuesday', ... 'sunday'
	* If 'all', the schedule item will be valid for ALL days.
	* Multiple schedules for the same day are supported.
* enabled
    * Boolean indicating if this schedule is currently enabled. Disabled schedule items will be ignored by the robot.
* type
    * 'wander' for wander mode,

Note: 

* If the schedule start and stop time are equal that should be interpreted as the schedule item being active for all times.
* If the schedule start time is after the stop time that should be interpreted as the schedule starting on the specified day and stopping on the next day. This only applies if the day is set to a specific day and not to 'all'.
* If any schedule entry defines an active time period then there is no way for other schedule entries to make that time period inactive.

### Time format for start and stop: (string) HHmm
* UTC time
* HH: 24-hour format hour, from 00 to 23
	* Example: 00 = 12am, 01 = 1am, 12 = 12pm, 13 = 1pm, 23 = 11pm
* mm: minutes, from 00 to 59
	* Examples
		* '0000' midnight, 12am
		* '1200' noon, 12pm
		* '1335' 13:35, 1:35pm

### Example payload for desired and/or reported state. (The robot wanders from 9:00 AM to 10:00PM UTC).

```
{
  "schedule": [{
    "start": "0900",
    "stop": "2200",
    "day": "all",
    "enabled": true,
    "type": "wander"
  }]
}
```


### Example payload to disable the wander schedule.

```
{
  "schedule": [{
    "start": "1100",
    "stop": "2000",
    "day": "all",
    "enabled": false,
    "type": "wander"
  }]
}
```
