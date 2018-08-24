---
layout: reference
title: /map
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /map
```

#### rospy
```
awake_sub = rospy.Subscriber("/map", ${message}, map_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/map", 1, ${callback});
```

#### Related Documentation
``${message}``