---
layout: reference
title: /eyelids_controller/follow_joint_trajectory/goal
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /eyelids_controller/follow_joint_trajectory/goal
```

#### rospy
```
awake_sub = rospy.Subscriber("/eyelids_controller/follow_joint_trajectory/goal", ${message}, goal_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/eyelids_controller/follow_joint_trajectory/goal", 1, ${callback});
```

#### Related Documentation
``${message}``