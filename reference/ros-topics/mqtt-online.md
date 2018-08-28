---
layout: reference
title: /mqtt/online
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mqtt/online
```

#### rospy
```
awake_sub = rospy.Subscriber("/mqtt/online", ${message}, online_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mqtt/online", 1, ${callback});
```

#### Related Documentation
``${message}``  