# Battery Critical
When Kuri's battery level is at or below the [battery critical threshold](../named_constants.md) and she's not on the dock, Kuri interrupts what she's doing (unless she's [picked up](../commanded_behavior/picked_up.md) or sleeping in a pre-onboarding state) and heads back to her dock. She tries to stay responsive to interruptions and will comply with direct commands from the user.

# Feedback
While Kuri's battery level is at or below critical level and she's not on the dock, Kuri plays a continuous chest light animation. The priority of this chest light animation is below the Feedback/Status level (see [Chest Light](../chest_light.md)).

# Behavior
* When Kuri hits the critical battery threshold, she will stop any autonomous behavior and head back to the [dock](../autonomous_behavior/dock.md).
* When directed by the user via voice command to do something, we'll assume that the user is aware of the potential of running Kuri's battery down. Kuri's battery critical behavior will in this case be consistent with her behavior at a normal battery level with the following modifications:
  * When confirming a user command, Kuri will point out that her battery is at a critical level by looking at her chest light for a brief moment (this will be a variation of the got it reaction) as if to remind the user that her battery might run out.
  * If no one interacts with Kuri after Kuri completes the task the user directed her to do (i.e. becomes bored), she should head back to the dock again.
* If Kuri hits the critical battery threshold while someone else is driving her in override mode:
  * Kuri will stop for 5 seconds, letting the user read the message that will pop up in the app saying that Kuri is running out of battery.
  * If Kuri receives more driving commands within the 5 seconds, she will not attempt to go back to the charger after the 5 seconds are up.
  * If the 5 seconds elapse without any input from the user, Kuri will start going back to the charger.
