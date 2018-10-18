# Resume Mapping
After kuri is [onboarded](onboarding.md) the map is frozen in place.  If the user wants to add to their existing map after
onboarding is complete, the robot can be put in a special "resume mapping" mode.

## Preconditions
* The robot is not [lost](logical_concurrent_states/localization.md)

## Entering "Resume Mapping"
The app will send a command to the robot called [resume mapping from dock].
* If the robot is not on the dock, it will [autonomously dock](autonomous_behaviors/dock.md) before starting.
* If the robot is lost, the app will prompt the user to pick up Kuri and place it on the dock

## Mapping
Mapping works the same was as [initial mapping](onboarding.md) in oboarding with the following exceptions:
* If Kuri is [kidnapped](events/kidnapped.md), Resume Mapping ends and the map will be returned to the state it was in at the start of Resume Mapping.
* Hey Kuri is disabled during resume mapping

## Ending Mapping
* The user will drive the robot near the dock, and after prompting the user, kuri will [ILS dock].  Kuri will prompt the user to continue, accept, or reject the map
    * Continue will restart "Resume Mapping" and will continue to add to the map
    * Accept will update Kuri's static map with the additions made during Resume mapping, create an archive of that map, and mark it for [uploading to the cloud](../storage/maps.md).  Resume Mapping will end
     on the dock and in the [bored state](../autonomous_behavior/bored.md)
    * Reject will restore Kuri's static map to the way it was when Resume Mapping was started.  Resume Mapping will end 
     on the dock and in the [bored state](../autonomous_behavior/bored.md)
 * The user can interrupt Resume Mapping at any time with a quit command from the App.  This will restore Kuri's static map to the way it was when Resume mapping was started.  Resume mapping will end in the [bored state](../autonomous_behavior/bored.md)
 
### Interruptions
The following interruptions will also end Resume Mapping and restore Kuri's static map to the way it was when Resume Mapping was started.
* Critical Battery
* Sleep Command from the App
* 30 Minutes have elapsed without any interaction from the user
    
## Implementation Details:
Commands from the app that affect Resume Mapping
* resume_map
* dock
* close_off_map
* continue_mapping
* discard_new_map
