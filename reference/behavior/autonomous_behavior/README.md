# Autonomous Behaviors, or Kuri Soul
Kuri's autonomous behaviors, or "Kuri Soul" are behaviors that Kuri can perform on its own without user interaction.  Some of these autonomous behaviors can be enabled or disabled using the [scheduler](../schedule.md).  Some autonomous behaviors like [docking](dock.md) can be initiated with a manual command.

## Entry Point
Most behaviors that time out to Kuri Soul will time out to the [idle state](idle.md).  Idle prevents more disruptive autonomous behaviors from taking control of Kuri for a short time.  Once idle times out, Kuri will usually transition to [bored](bored.md) and if permitted by the schedule, on to [wander](wander.md)

Other behaviors may time out to [sleep](sleep.md) which is considered an autonomous behavior because it is possible to automatically dispatch other autonomous behaviors from the sleep state.

