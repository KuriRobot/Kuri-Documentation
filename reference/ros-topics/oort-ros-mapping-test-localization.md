---
layout: reference
title: /oort_ros_mapping/test_localization
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /oort_ros_mapping/test_localization
```

#### rospy
```
awake_sub = rospy.Subscriber("/oort_ros_mapping/test_localization", ${message}, test_localization_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/oort_ros_mapping/test_localization", 1, ${callback});
```

#### Related Documentation
``${message}``  