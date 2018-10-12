---
layout: reference
title: Volume.msg
package: gizmo_msgs
category: message
tags: 
- audio
- volume
---

## Message Definition
```
# Volume level
# If is_relative is True, this adds to the current volume level
# If is_relative is False, this sets the current volume level
# Note: level is on the range [0:100], and will be clapmed appropriately
# upon receipt of this message
int16 level

# Whether the level should be added to the current level or set absolutely
bool is_relative

# Mute and unmute
# If either of these are set to true, the above values will not be used
# Muting stores the volume level and sets the level to 0
# Unmuting restores the volume level (or uses the default volume if no level
# has been stored)
bool mute
bool unmute
```


## Related Documentation
``volume-interface``
``bt_speaker_agent``
