---
layout: reference
title: /diagnostics
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /diagnostics
```

#### rospy
```
awake_sub = rospy.Subscriber("/diagnostics", ${message}, diagnostics_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/diagnostics", 1, ${callback});
```

#### Related Documentation
``${message}``  