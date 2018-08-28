---
layout: reference
title: /odom
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /odom
```

#### rospy
```
awake_sub = rospy.Subscriber("/odom", ${message}, odom_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/odom", 1, ${callback});
```

#### Related Documentation
``${message}``