---
layout: reference
title: /cloud
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /cloud
```

#### rospy
```
awake_sub = rospy.Subscriber("/cloud", ${message}, cloud_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/cloud", 1, ${callback});
```

#### Related Documentation
``${message}``  