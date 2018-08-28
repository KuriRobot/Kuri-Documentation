---
layout: reference
title: /rosout
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /rosout
```

#### rospy
```
awake_sub = rospy.Subscriber("/rosout", ${message}, rosout_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/rosout", 1, ${callback});
```

#### Related Documentation
``${message}``