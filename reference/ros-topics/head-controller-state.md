---
layout: reference
title: /head_controller/state
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /head_controller/state
```

#### rospy
```
awake_sub = rospy.Subscriber("/head_controller/state", ${message}, state_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/head_controller/state", 1, ${callback});
```

#### Related Documentation
``${message}``  