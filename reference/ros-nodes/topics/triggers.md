---
layout: reference
title: /triggers
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /triggers
```

#### rospy
```
awake_sub = rospy.Subscriber("/triggers", ${message}, triggers_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/triggers", 1, ${callback});
```

#### Related Documentation
``${message}``