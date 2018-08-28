---
layout: reference
title: /volume/hw_set
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/hw_set
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/hw_set", ${message}, hw_set_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/hw_set", 1, ${callback});
```

#### Related Documentation
``${message}``