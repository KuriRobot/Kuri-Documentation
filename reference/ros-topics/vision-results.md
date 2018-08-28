---
layout: reference
title: /vision/results
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /vision/results
```

#### rospy
```
awake_sub = rospy.Subscriber("/vision/results", ${message}, results_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/vision/results", 1, ${callback});
```

#### Related Documentation
``${message}``  