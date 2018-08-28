---
layout: reference
title: /mqtt/connected
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mqtt/connected
```

#### rospy
```
awake_sub = rospy.Subscriber("/mqtt/connected", ${message}, connected_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mqtt/connected", 1, ${callback});
```

#### Related Documentation
``${message}``  