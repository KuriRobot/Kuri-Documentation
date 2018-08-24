---
layout: reference
title: /head_controller/follow_joint_trajectory/feedback
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /head_controller/follow_joint_trajectory/feedback
```

#### rospy
```
awake_sub = rospy.Subscriber("/head_controller/follow_joint_trajectory/feedback", ${message}, feedback_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/head_controller/follow_joint_trajectory/feedback", 1, ${callback});
```

#### Related Documentation
``${message}``