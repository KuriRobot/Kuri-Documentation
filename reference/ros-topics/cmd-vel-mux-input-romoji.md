---
layout: reference
title: /cmd_vel_mux/input/romoji
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /cmd_vel_mux/input/romoji
```

#### rospy
```
awake_sub = rospy.Subscriber("/cmd_vel_mux/input/romoji", ${message}, romoji_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/cmd_vel_mux/input/romoji", 1, ${callback});
```

#### Related Documentation
``${message}``  