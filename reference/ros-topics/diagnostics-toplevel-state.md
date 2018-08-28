---
layout: reference
title: /diagnostics_toplevel_state
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /diagnostics_toplevel_state
```

#### rospy
```
awake_sub = rospy.Subscriber("/diagnostics_toplevel_state", ${message}, diagnostics_toplevel_state_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/diagnostics_toplevel_state", 1, ${callback});
```

#### Related Documentation
``${message}``