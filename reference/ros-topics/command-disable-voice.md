---
layout: reference
title: /command/disable_voice
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /command/disable_voice
```

#### rospy
```
awake_sub = rospy.Subscriber("/command/disable_voice", ${message}, disable_voice_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/command/disable_voice", 1, ${callback});
```

#### Related Documentation
``${message}``  