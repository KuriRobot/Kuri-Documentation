# Named Constants
Below is a list of named constants referenced by name in the specification

| Name | Description | Value |  
| --- | --- | --- |
| Battery Critical | Kuri's battery is very low.  Kuri must dock or risk running out of battery and turning off | 15% |

## Parametrized Constants
The parameters below can be changed to alter Kuri's behavior without having to change Kuri source code

| Name | Description | File |
| --- | --- | --- |
| attention_bored_timeout | Amount of time that Kuri stays [at attention](commanded_behavior/at_attention.md) | kuri_behavior.yaml |
| enable_sleep_twitches | Controls whether or not Kuri twitches while [asleep](autonomous_behavior/sleep.md) | kuri_behavior.yaml |
| enable_wander | Controls whether or not Kuri [wanders](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| idle_bored_timeout | The number of seconds it takes for Kuri to transition from [idle](autonomous_behavior/idle.md) to [bored](autonomous_behavior/bored.md) | kuri_behavior.yaml |
| idle_sleep_timeout | The amount of time it takes kuri to time out from [bored](autonomous_behavior/bored.md) to [sleep](autonomous_behavior/sleep.md) | kuri_behavior.yaml |
| wander_min_number_waypoints | The minimum number of waypoints Kuri must have to begin [wandering](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_min_seconds_between_captures | The minimum amount of time between captures in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_min_brightness | The minimum brightness level to capture a moment in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_min_sharpness | The minimum sharpness level to capture a moment in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_bad_cluster | The UUID of the "bad" cluster to prevent capture of a moment in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_max_similar | The maximum number of similar moments to capture in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_min_excitement | The minimum excitement (from the object classifier) to capture a moment in a [wander photo shoot](autonomous_behavior/wander.md) | kuri_behavior.yaml |
| wander_photo_shoot_default_time | The minimum amount of time a [photo shoot](autonomous_behavior/wander.md) will last if nothing interesting is seen | kuri_behavior.yaml |
| wander_photo_shoot_max_time | The maximum amount of time a [photo shoot](autonomous_behavior/wander.md) will last | kuri_behavior.yaml |
| wander_start_power_threshold | If Kuri is on the dock, the minimum battery percentage that Kuri will have before starting to [wander](autonomous_behavior/wander.md) | kuri_behavior.yaml |
