---
layout: reference
title: /mobile_base/rear_cliff
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/rear_cliff
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/rear_cliff", ${message}, rear_cliff_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/rear_cliff", 1, ${callback});
```

#### Related Documentation
``${message}``  