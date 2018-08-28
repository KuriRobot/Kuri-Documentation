---
layout: reference
title: /command/cmd_ack
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /command/cmd_ack
```

#### rospy
```
awake_sub = rospy.Subscriber("/command/cmd_ack", ${message}, cmd_ack_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/command/cmd_ack", 1, ${callback});
```

#### Related Documentation
``${message}``  