---
layout: reference
title: /bluetooth/pair_status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/pair_status
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/pair_status", ${message}, pair_status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/pair_status", 1, ${callback});
```

#### Related Documentation
``${message}``  