---
layout: reference
title: /ros_beat/detection
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /ros_beat/detection
```

#### rospy
```
awake_sub = rospy.Subscriber("/ros_beat/detection", ${message}, detection_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/ros_beat/detection", 1, ${callback});
```

#### Related Documentation
``${message}``  