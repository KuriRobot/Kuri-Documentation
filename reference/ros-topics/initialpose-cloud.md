---
layout: reference
title: /initialpose_cloud
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /initialpose_cloud
```

#### rospy
```
awake_sub = rospy.Subscriber("/initialpose_cloud", ${message}, initialpose_cloud_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/initialpose_cloud", 1, ${callback});
```

#### Related Documentation
``${message}``  