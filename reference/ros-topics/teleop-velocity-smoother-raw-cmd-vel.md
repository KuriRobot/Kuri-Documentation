---
layout: reference
title: /teleop_velocity_smoother/raw_cmd_vel
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /teleop_velocity_smoother/raw_cmd_vel
```

#### rospy
```
awake_sub = rospy.Subscriber("/teleop_velocity_smoother/raw_cmd_vel", ${message}, raw_cmd_vel_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/teleop_velocity_smoother/raw_cmd_vel", 1, ${callback});
```

#### Related Documentation
``${message}``  