---
layout: reference
title: /volume/level
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/level
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/level", ${message}, level_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/level", 1, ${callback});
```

#### Related Documentation
``${message}``  