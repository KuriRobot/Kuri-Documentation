---
layout: reference
title: /oort_ros_mapping/queue_size
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /oort_ros_mapping/queue_size
```

#### rospy
```
awake_sub = rospy.Subscriber("/oort_ros_mapping/queue_size", ${message}, queue_size_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/oort_ros_mapping/queue_size", 1, ${callback});
```

#### Related Documentation
``${message}``