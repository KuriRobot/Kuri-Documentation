# Find Faces
At attention occurs when the user physically interacts with the robot by tapping it on the head, or after lifting a long hold on the head or ending a tickle.

## Entering At Attention
* Occurs at the end of the touch

## Preconditions
* Kuri is not in onboarding or resume mapping.
* Touch is not being used to cancel navigation that has just been resumed

## Find Face Behavior
* Kuri uses [Face Tracking](../face_tracker.md) with a searching animation to find faces
* This state exits when [Face Tracking](../face_tracker.md) reports it has lost facing or after 20 seconds
