---
layout: reference
title: /depthscan/front_cliff
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /depthscan/front_cliff
```

#### rospy
```
awake_sub = rospy.Subscriber("/depthscan/front_cliff", ${message}, front_cliff_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/depthscan/front_cliff", 1, ${callback});
```

#### Related Documentation
``${message}``  