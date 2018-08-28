---
layout: reference
title: /bluetooth/req_pair_mode
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/req_pair_mode
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/req_pair_mode", ${message}, req_pair_mode_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/req_pair_mode", 1, ${callback});
```

#### Related Documentation
``${message}``  