---
layout: reference
title: /bluetooth/req_disconnect
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/req_disconnect
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/req_disconnect", ${message}, req_disconnect_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/req_disconnect", 1, ${callback});
```

#### Related Documentation
``${message}``