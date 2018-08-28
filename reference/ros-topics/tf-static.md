---
layout: reference
title: /tf_static
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /tf_static
```

#### rospy
```
awake_sub = rospy.Subscriber("/tf_static", ${message}, tf_static_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/tf_static", 1, ${callback});
```

#### Related Documentation
``${message}``  