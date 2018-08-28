---
layout: reference
title: /audio/voice_delegate/exchange
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /audio/voice_delegate/exchange
```

#### rospy
```
awake_sub = rospy.Subscriber("/audio/voice_delegate/exchange", ${message}, exchange_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/audio/voice_delegate/exchange", 1, ${callback});
```

#### Related Documentation
``${message}``  