---
layout: reference
title: /scan_reduced_nav
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /scan_reduced_nav
```

#### rospy
```
awake_sub = rospy.Subscriber("/scan_reduced_nav", ${message}, scan_reduced_nav_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/scan_reduced_nav", 1, ${callback});
```

#### Related Documentation
``${message}``  