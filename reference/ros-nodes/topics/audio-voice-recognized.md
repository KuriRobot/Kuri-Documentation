---
layout: reference
title: /audio/voice/recognized
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /audio/voice/recognized
```

#### rospy
```
awake_sub = rospy.Subscriber("/audio/voice/recognized", ${message}, recognized_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/audio/voice/recognized", 1, ${callback});
```

#### Related Documentation
``${message}``