---
layout: reference
title: /initialpose
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /initialpose
```

#### rospy
```
awake_sub = rospy.Subscriber("/initialpose", ${message}, initialpose_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/initialpose", 1, ${callback});
```

#### Related Documentation
``${message}``