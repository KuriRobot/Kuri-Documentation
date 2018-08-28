---
layout: reference
title: /depthscan/depth_image
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /depthscan/depth_image
```

#### rospy
```
awake_sub = rospy.Subscriber("/depthscan/depth_image", ${message}, depth_image_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/depthscan/depth_image", 1, ${callback});
```

#### Related Documentation
``${message}``