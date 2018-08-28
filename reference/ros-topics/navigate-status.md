---
layout: reference
title: /navigate/status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /navigate/status
```

#### rospy
```
awake_sub = rospy.Subscriber("/navigate/status", ${message}, status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/navigate/status", 1, ${callback});
```

#### Related Documentation
``${message}``  