---
layout: reference
title: /bluetooth/req_pause
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/req_pause
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/req_pause", ${message}, req_pause_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/req_pause", 1, ${callback});
```

#### Related Documentation
``${message}``  