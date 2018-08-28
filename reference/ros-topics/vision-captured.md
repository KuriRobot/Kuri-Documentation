---
layout: reference
title: /vision/captured
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /vision/captured
```

#### rospy
```
awake_sub = rospy.Subscriber("/vision/captured", ${message}, captured_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/vision/captured", 1, ${callback});
```

#### Related Documentation
``${message}``  