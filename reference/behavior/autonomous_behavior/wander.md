# Wander
Wander is a state in which Kuri will autonomously navigate around the house and take photographs

## Preconditions for Autonomous Wander
* Kuri has completed [onboarding](../onboarding.md).
* Kuri is not lost
* The [wander schedule](../schedule.md) permits wandering at this time
* Kuri has three or more waypoints saved
* If Kuri is on the dock, Kuri's battery level is 75% or higher
* Kuri is awake OR Kuri has been sleeping for a random period of time between 45-75 min OR Kuri has been docked for a random period of time between 45-75 min and has been asleep for at least 2 min.

## Preconditions for Commanded Wander
* Kuri has completed [onboarding](../onboarding.md).
* Kuri is not lost
* Kuri has three or more waypoints saved

## Wander Behavior
* Kuri will autonomously navigate to a waypoint
    * Failure to navigate to a waypoint will cause Kuri to select another waypoint to navigate to.
    * This behavior can be modified by [stay-put](../logical_concurrent_states/stay_put.md)
* At the waypoint, Kuri will begin taking videos (see *Photo Session* below)
* While moving to the waypoint, if Kuri has been navigating for at least 30 seconds, if the [attention service] indicates that something is interesting, Kuri will stop at this point and being taking photographs (see *Photo Session* below)
* If Kuri's battery level reaches the [critical level](../named_constants.md), the photo session or navigation will be interrupted

## Photo Session
Kuri attempts to take "Captures" during a photo session. A Capture is a short (5s) video and a full resolution still image from the video.

* When Kuri attempts to take a capture, she checks if the moment is of bad quality. If so, she aborts the capture. Bad quality moments do not meet the all following criteria (parameter values to be tuned through testing):
	* Minimum brightness
	* Minimum sharpness
	* Not a member of the "bad" cluster (from the object classifier features)
	* Have not already captured many similar moments
	* Minimum excitement

* Kuri will turn its body in place and perform the `scripted idle` animation and move between random poses for 1 to 10 minutes
* When the [attention service] indicates that something interesting is in the frame, Kuri will attempt to take Captures
    * Take a maximum of 1 Capture every 10 seconds
    * If waiting to start a capture, attempt to keep the subject in the frame
    * When Kuri takes a Capture, a sound like a camera shutter will play
* After attempting to take a Capture, Kuri runs a repositioning animation so she doesn't immediately take the same Capture
* Kuri will continue to move in place between random poses and attempt to take Captures until one of the following indicates that the photo session should stop
    * 1 minute has elapsed without the [attention service] indicating that something interesting is in the frame.  Kuri will return to the wander behavior (see *Wander Behavior* above)
    * 3 minutes have elapsed without any captures.
    * 10 minutes in the photo session have elapsed.  Kuri will return to the wander behavior (see *Wander Behavior* above)
    * Kuri's battery level reaches the [critical level](../named_constants.md).  Kuri will stop taking photographs and stop wandering and attempt to [navigate back to the dock](dock.md)

### Uploading Captures to the Cloud
A capture is uploaded to the cloud as four files
* Video File
* Video File Metadata
* Thumbnail File
* Thumbnail File Metadata
