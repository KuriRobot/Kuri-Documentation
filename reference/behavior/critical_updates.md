# Critical Updates (During Onboarding)

For the Holiday release of Kuri, we may find a late critical issue that impacts robot safety. If this is the case, we will force the application of a critical update before the user can proceed with onboarding. This is NOT a user-friendly mechanism and should be used only at dire need.

## Robot Flow
* Kuri checks for critical updates during the IS_READY step of onboarding/booting
* If no update is available, Kuri proceeds
* If an update is available:
    * Kuri sets the SYSTEM status CRITICAL_UPDATE
    * Kuri must be on the dock to update, and will retry/wait until this happens
    * Kuri will retry failed updates in this state
    * Kuri will NOT respond to external input
    * When the update downloaded, Kuri will re-apply it and reboot
* After reboot:
    * Kuri will set the SYSTEM status NORMAL
    * Kuri will proceed to the ONBOARD_SLEEPING state
