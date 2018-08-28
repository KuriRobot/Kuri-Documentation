---
layout: reference
title: /navigate/goal
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /navigate/goal
```

#### rospy
```
awake_sub = rospy.Subscriber("/navigate/goal", ${message}, goal_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/navigate/goal", 1, ${callback});
```

#### Related Documentation
``${message}``  