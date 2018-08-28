---
layout: reference
title: /nav_mode
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /nav_mode
```

#### rospy
```
awake_sub = rospy.Subscriber("/nav_mode", ${message}, nav_mode_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/nav_mode", 1, ${callback});
```

#### Related Documentation
``${message}``