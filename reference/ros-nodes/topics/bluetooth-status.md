---
layout: reference
title: /bluetooth/status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/status
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/status", ${message}, status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/status", 1, ${callback});
```

#### Related Documentation
``${message}``