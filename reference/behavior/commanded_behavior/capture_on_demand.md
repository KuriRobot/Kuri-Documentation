# Capture on Demand
Capture on Demand is triggered by a voice command and results in Kuri looking for a person / pet and uploading a moment to the user's account.

## Entering Commanded Photo Shoot
* A "Capture a Moment" [Voice Command](listening.md)

## Preconditions
* Kuri is not in onboarding or resume mapping

## Commanded Photo Shoot Behavior
* Kuri acknowledges that she understood with "yes" before starting to capture
* Kuri looks back to where she was gazing before hearing the "hey kuri" voice command
* Kuri looks around with her head until she sees a face or pet, or 12 seconds has passed
* Kuri attempts to frame the shot for up to 2.5 seconds
* Kuri initiates an audio countdown (three short beeps) after framing and before capturing the moment
* Kuri indicates that she's captured a moment through the standard capture animation (chest light + sound)

## Postconditions
* Kuri uploads a moment to the user's account
