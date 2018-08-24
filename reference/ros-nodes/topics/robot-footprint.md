---
layout: reference
title: /robot_footprint
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /robot_footprint
```

#### rospy
```
awake_sub = rospy.Subscriber("/robot_footprint", ${message}, robot_footprint_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/robot_footprint", 1, ${callback});
```

#### Related Documentation
``${message}``