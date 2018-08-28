---
layout: reference
title: /depthscan/cliff_cloud
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /depthscan/cliff_cloud
```

#### rospy
```
awake_sub = rospy.Subscriber("/depthscan/cliff_cloud", ${message}, cliff_cloud_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/depthscan/cliff_cloud", 1, ${callback});
```

#### Related Documentation
``${message}``