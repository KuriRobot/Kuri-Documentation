---
layout: reference
title: /tf
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /tf
```

#### rospy
```
awake_sub = rospy.Subscriber("/tf", ${message}, tf_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/tf", 1, ${callback});
```

#### Related Documentation
``${message}``  