# Drive ("Live Mode - Override Drive")
In the drive state, the user is remotely controlling Kuri's drive train and 
head movements

## Entering Drive
* Drive is entered when the user is in 
[override mode](../logical_concurrent_states/override_mode.md) and 
sends a HeadPose or Twist message from the "Drive" tab in the app 

## Preconditions
* The robot must be in 
[override mode](../logical_concurrent_states/override_mode.md)

## Drive Behavior
* At the start of drive, Kuri will re-center its head.  After this, Kuri 
will not automatically move its head while in the Drive state
* Kuri responds to geometry_msgs.msg.Twist messages by driving in the 
direction specified by the message
* Kuri responds to geometry_msgs.msg.HeadPose messages by moving its head to 
the position specified by the message
