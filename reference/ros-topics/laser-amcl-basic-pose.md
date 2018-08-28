---
layout: reference
title: /laser_amcl_basic_pose
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /laser_amcl_basic_pose
```

#### rospy
```
awake_sub = rospy.Subscriber("/laser_amcl_basic_pose", ${message}, laser_amcl_basic_pose_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/laser_amcl_basic_pose", 1, ${callback});
```

#### Related Documentation
``${message}``  