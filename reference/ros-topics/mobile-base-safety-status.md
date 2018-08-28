---
layout: reference
title: /mobile_base/safety_status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/safety_status
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/safety_status", ${message}, safety_status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/safety_status", 1, ${callback});
```

#### Related Documentation
``${message}``  