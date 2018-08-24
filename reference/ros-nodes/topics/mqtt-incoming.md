---
layout: reference
title: /mqtt/incoming
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mqtt/incoming
```

#### rospy
```
awake_sub = rospy.Subscriber("/mqtt/incoming", ${message}, incoming_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mqtt/incoming", 1, ${callback});
```

#### Related Documentation
``${message}``