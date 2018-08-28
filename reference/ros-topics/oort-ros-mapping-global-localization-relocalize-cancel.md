---
layout: reference
title: /oort_ros_mapping/global_localization/relocalize/cancel
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /oort_ros_mapping/global_localization/relocalize/cancel
```

#### rospy
```
awake_sub = rospy.Subscriber("/oort_ros_mapping/global_localization/relocalize/cancel", ${message}, cancel_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/oort_ros_mapping/global_localization/relocalize/cancel", 1, ${callback});
```

#### Related Documentation
``${message}``  