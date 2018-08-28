---
layout: reference
title: /mobile_base/telescope
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/telescope
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/telescope", ${message}, telescope_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/telescope", 1, ${callback});
```

#### Related Documentation
``${message}``  