---
layout: reference
title: /mobile_base/sensors
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/sensors
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/sensors", ${message}, sensors_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/sensors", 1, ${callback});
```

#### Related Documentation
``${message}``