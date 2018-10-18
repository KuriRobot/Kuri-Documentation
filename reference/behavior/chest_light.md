# How Kuri Uses the Chest Light

Kuri uses the chest light to:

* communicate certain logical concurrent states to the user (e.g. critical battery, or live mode)
* communicate feedback to voice commands, or the result of certain actions (e.g. success when docking, Bluetooth pairing)
* accompany dance routines as a music visualizer
* accentuate certain reactions like "What rhymes with orange"

# List of Lights and their Usage

| State/Reaction | Color | Description of Pattern |
| --- | --- | --- |
| Live (someone looking through Kuri's eyes) | Purple | Solid glow |
| Tapped on head before initial setup | White | Single pulse (can sometimes appear with a pink or blue accent) |
| Saving the Map | White | Spinner LED animation |
| Moment Captured | White | Pulse |
| Listening for Voice Command | Blue | Reactive to voice |
| Huh? (Voice Command Not Understood) | Orange | Pulse |
| Huh? (Voice Command while Kuri is Offline) | Red | Light pulses twice |
| Got It! (Successful Voice Command) | Mint Green | Pulse |
| Docking (Success) | Mint Green | Pulse |
| Dancing | Multiple | Multiple colors swirling |
| Critical Battery | Orange | Pulse (shown when Kuri's battery level is below the [battery critical](../named_constants.md)) |
| Bluetooth Pairing | White | Spinner LED animation |
| Lost | Red | Light pulses twice, Kuri looks around |
| What rhymes with orange? | Orange	| |
