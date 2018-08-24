---
layout: reference
title: /head_teleop
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /head_teleop
```

#### rospy
```
awake_sub = rospy.Subscriber("/head_teleop", ${message}, head_teleop_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/head_teleop", 1, ${callback});
```

#### Related Documentation
``${message}``