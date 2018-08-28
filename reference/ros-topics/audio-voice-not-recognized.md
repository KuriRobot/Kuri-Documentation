---
layout: reference
title: /audio/voice/not_recognized
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /audio/voice/not_recognized
```

#### rospy
```
awake_sub = rospy.Subscriber("/audio/voice/not_recognized", ${message}, not_recognized_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/audio/voice/not_recognized", 1, ${callback});
```

#### Related Documentation
``${message}``  