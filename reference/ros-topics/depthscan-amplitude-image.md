---
layout: reference
title: /depthscan/amplitude_image
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /depthscan/amplitude_image
```

#### rospy
```
awake_sub = rospy.Subscriber("/depthscan/amplitude_image", ${message}, amplitude_image_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/depthscan/amplitude_image", 1, ${callback});
```

#### Related Documentation
``${message}``  