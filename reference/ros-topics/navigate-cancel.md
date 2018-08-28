---
layout: reference
title: /navigate/cancel
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /navigate/cancel
```

#### rospy
```
awake_sub = rospy.Subscriber("/navigate/cancel", ${message}, cancel_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/navigate/cancel", 1, ${callback});
```

#### Related Documentation
``${message}``