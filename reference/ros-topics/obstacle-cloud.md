---
layout: reference
title: /obstacle_cloud
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /obstacle_cloud
```

#### rospy
```
awake_sub = rospy.Subscriber("/obstacle_cloud", ${message}, obstacle_cloud_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/obstacle_cloud", 1, ${callback});
```

#### Related Documentation
``${message}``