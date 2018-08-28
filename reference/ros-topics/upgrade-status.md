---
layout: reference
title: /upgrade/status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /upgrade/status
```

#### rospy
```
awake_sub = rospy.Subscriber("/upgrade/status", ${message}, status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/upgrade/status", 1, ${callback});
```

#### Related Documentation
``${message}``