# Bored
When Kuri is bored, Kuri will play a series of short animations. If Kuri is off the dock, these include head movement, body movement, and sound. If Kuri is on the dock including in [Pedestal](../logical_concurrent_states/pedestal.md)  there is no body movement or sound. 

## Bored Behavior
* Kuri will play the animations from the 'boredom' animation set for 2 minutes
* While bored, Kuri can react to pets or faces with greeting reactions
* After 2 minutes, Kuri will attempt to [dispatch](dispatch.md) an autonomous behavior
* If no autonomous behavior is dispatched, Kuri will [to go sleep](sleep.md) unless Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md)  mode.
