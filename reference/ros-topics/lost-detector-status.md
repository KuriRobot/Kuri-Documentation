---
layout: reference
title: /lost_detector/status
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /lost_detector/status
```

#### rospy
```
awake_sub = rospy.Subscriber("/lost_detector/status", ${message}, status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/lost_detector/status", 1, ${callback});
```

#### Related Documentation
``${message}``  