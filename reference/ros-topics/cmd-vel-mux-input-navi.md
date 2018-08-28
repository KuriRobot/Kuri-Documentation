---
layout: reference
title: /cmd_vel_mux/input/navi
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /cmd_vel_mux/input/navi
```

#### rospy
```
awake_sub = rospy.Subscriber("/cmd_vel_mux/input/navi", ${message}, navi_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/cmd_vel_mux/input/navi", 1, ${callback});
```

#### Related Documentation
``${message}``