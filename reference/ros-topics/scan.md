---
layout: reference
title: /scan
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /scan
```

#### rospy
```
awake_sub = rospy.Subscriber("/scan", ${message}, scan_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/scan", 1, ${callback});
```

#### Related Documentation
``${message}``  