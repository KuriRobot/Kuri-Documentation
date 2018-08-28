---
layout: reference
title: /oort_ros_mapping/global_localization/relocalize/feedback
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /oort_ros_mapping/global_localization/relocalize/feedback
```

#### rospy
```
awake_sub = rospy.Subscriber("/oort_ros_mapping/global_localization/relocalize/feedback", ${message}, feedback_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/oort_ros_mapping/global_localization/relocalize/feedback", 1, ${callback});
```

#### Related Documentation
``${message}``  