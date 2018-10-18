# Autonomous Dispatch
Several states use the same logic to dispatch autonomous behavior.  Rather than describe the dispatch logic for autonomous behavior, the logic is centralized here.

## Preconditions
* Kuri has completed [onboarding](../onboarding.md).  No autonomous behavior can be dispatched before Kuri is onboarded

## Dispatch Behavior
* If the pre-conditions for [wander](wander.md) are met, kuri will begin to wander unless Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode
* If Kuri is off of the dock, Kuri will attempt to [navitage back to the dock](dock.md) unless Kuri is in [Pedestal](../logical_concurrent_states/pedestal.md) mode, or told to [stay put](../logical_concurrent_states/stay_put.md)
* Otherwise, Kuri does not dispatch any autonomous behavior

