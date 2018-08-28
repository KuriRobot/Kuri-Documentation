---
layout: reference
title: /mobile_base/battery_state
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/battery_state
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/battery_state", ${message}, battery_state_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/battery_state", 1, ${callback});
```

#### Related Documentation
``${message}``  