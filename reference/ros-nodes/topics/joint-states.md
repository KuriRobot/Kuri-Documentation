---
layout: reference
title: /joint_states
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /joint_states
```

#### rospy
```
awake_sub = rospy.Subscriber("/joint_states", ${message}, joint_states_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/joint_states", 1, ${callback});
```

#### Related Documentation
``${message}``