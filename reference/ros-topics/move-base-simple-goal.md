---
layout: reference
title: /move_base_simple/goal
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /move_base_simple/goal
```

#### rospy
```
awake_sub = rospy.Subscriber("/move_base_simple/goal", ${message}, goal_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/move_base_simple/goal", 1, ${callback});
```

#### Related Documentation
``${message}``  