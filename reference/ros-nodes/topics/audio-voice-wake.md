---
layout: reference
title: /audio/voice/wake
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /audio/voice/wake
```

#### rospy
```
awake_sub = rospy.Subscriber("/audio/voice/wake", ${message}, wake_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/audio/voice/wake", 1, ${callback});
```

#### Related Documentation
``${message}``