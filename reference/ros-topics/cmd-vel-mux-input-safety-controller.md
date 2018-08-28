---
layout: reference
title: /cmd_vel_mux/input/safety_controller
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /cmd_vel_mux/input/safety_controller
```

#### rospy
```
awake_sub = rospy.Subscriber("/cmd_vel_mux/input/safety_controller", ${message}, safety_controller_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/cmd_vel_mux/input/safety_controller", 1, ${callback});
```

#### Related Documentation
``${message}``  