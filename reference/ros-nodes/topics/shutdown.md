---
layout: reference
title: /shutdown
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /shutdown
```

#### rospy
```
awake_sub = rospy.Subscriber("/shutdown", ${message}, shutdown_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/shutdown", 1, ${callback});
```

#### Related Documentation
``${message}``