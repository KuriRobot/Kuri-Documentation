---
layout: reference
title: /filtered_joint_states
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /filtered_joint_states
```

#### rospy
```
awake_sub = rospy.Subscriber("/filtered_joint_states", ${message}, filtered_joint_states_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/filtered_joint_states", 1, ${callback});
```

#### Related Documentation
``${message}``  