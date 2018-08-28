---
layout: reference
title: /navigate/feedback
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /navigate/feedback
```

#### rospy
```
awake_sub = rospy.Subscriber("/navigate/feedback", ${message}, feedback_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/navigate/feedback", 1, ${callback});
```

#### Related Documentation
``${message}``  