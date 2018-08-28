---
layout: reference
title: /laser_particlecloud
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /laser_particlecloud
```

#### rospy
```
awake_sub = rospy.Subscriber("/laser_particlecloud", ${message}, laser_particlecloud_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/laser_particlecloud", 1, ${callback});
```

#### Related Documentation
``${message}``  