---
layout: reference
title: /depthscan/active
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /depthscan/active
```

#### rospy
```
awake_sub = rospy.Subscriber("/depthscan/active", ${message}, active_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/depthscan/active", 1, ${callback});
```

#### Related Documentation
``${message}``  