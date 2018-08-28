---
layout: reference
title: /client_interface/romoji/feedback
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /client_interface/romoji/feedback
```

#### rospy
```
awake_sub = rospy.Subscriber("/client_interface/romoji/feedback", ${message}, feedback_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/client_interface/romoji/feedback", 1, ${callback});
```

#### Related Documentation
``${message}``  