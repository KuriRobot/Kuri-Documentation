---
layout: reference
title: /eyelids_controller/follow_joint_trajectory/result
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /eyelids_controller/follow_joint_trajectory/result
```

#### rospy
```
awake_sub = rospy.Subscriber("/eyelids_controller/follow_joint_trajectory/result", ${message}, result_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/eyelids_controller/follow_joint_trajectory/result", 1, ${callback});
```

#### Related Documentation
``${message}``