---
layout: reference
title: /mqtt/outgoing
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mqtt/outgoing
```

#### rospy
```
awake_sub = rospy.Subscriber("/mqtt/outgoing", ${message}, outgoing_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mqtt/outgoing", 1, ${callback});
```

#### Related Documentation
``${message}``