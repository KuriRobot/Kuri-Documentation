---
layout: reference
title: /map_nav
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /map_nav
```

#### rospy
```
awake_sub = rospy.Subscriber("/map_nav", ${message}, map_nav_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/map_nav", 1, ${callback});
```

#### Related Documentation
``${message}``  