# Autonomous Dance
Autonoumous Dance is a state in which Kuri will automatically dance along to music that is playing through her speaker.

## Preconditions for Autonomous Dance
* The user setting for autonomous dance is on. (It is off by default)
* Kuri is bored or wandering
* Kuri has no active WebRTC connection (nobody is viewing Kuri's video stream with the iOS app).
* Kuri is playing music through the speaker that has a BPM (beats-per-minute) above 40.
    * This is accomplished through pairing a bluetooth device and playing music through Kuri

## Dance Behavior
Kuri begins to dance to the beat when she is playing music through her speaker. The dance behavior begins with a reaction to the dance (Kuri smiles and looks up). After this, Kuri starts bobbing her head to the beat of the music. After bobbing for a short amount of time (this depends on the tempo of the music), Kuri will start rotating her body more and exaggerating her dance performance. Kuri loops through a predefined sequence of dance moves until the music stops. 

When the music stops (or the tempo drops below 40 BPM), Kuri will briefly look sad and look around.
