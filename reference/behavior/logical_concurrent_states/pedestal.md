# Pedestal Mode

Pedestal mode is used in trade shows and other marketing events to show off Kuri on a pedestal/table. To secure Kuri in place and provide power, we use a special stand that keeps her wheels dropped, while at the same time allowing her to be docked and charging.

## Behavior

Since the primary goal for Pedestal mode is for Kuri to look alive when on the special stand, several modifications need to be made to Kuri's default behavior:

- Kuri doesn't go to sleep when [charging](charging.md)
- Kuri doesn't go to sleep when [bored](../autonomous_behavior/bored.md)
- Kuri doesn't try to drive anywhere
- Kuri remains responsive to voice commands, but does not try to rotate her body in the direction of the sound
- Kuri doesn't wander
- Kuri doesn't attempt to [dock](../autonomous_behavior/dock.md) when battery is critical
- Kuri accepts teleop commands (for looking around, romoji use), but the wheels do not move
- "Hey Kuri, sleep" still puts Kuri to sleep
- Voice commands that would make Kuri drive don't work. They are processed as normal, but Kuri doesn't attempt to drive anywhere.
- "Hey Kuri, I love you" triggers the usual reaction but without the wheel movement (smile + chest light only)

## How pedestal mode is entered:

- Always active when on a charger with wheels dropped.

## How pedestal mode is exited:

- When put down on the ground or when not charging
