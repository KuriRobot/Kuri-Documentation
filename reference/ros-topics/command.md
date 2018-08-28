---
layout: reference
title: /command
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /command
```

#### rospy
```
awake_sub = rospy.Subscriber("/command", ${message}, command_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/command", 1, ${callback});
```

#### Related Documentation
``${message}``  