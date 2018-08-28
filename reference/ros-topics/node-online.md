---
layout: reference
title: /node_online
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /node_online
```

#### rospy
```
awake_sub = rospy.Subscriber("/node_online", ${message}, node_online_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/node_online", 1, ${callback});
```

#### Related Documentation
``${message}``  