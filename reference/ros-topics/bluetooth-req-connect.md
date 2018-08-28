---
layout: reference
title: /bluetooth/req_connect
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/req_connect
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/req_connect", ${message}, req_connect_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/req_connect", 1, ${callback});
```

#### Related Documentation
``${message}``  