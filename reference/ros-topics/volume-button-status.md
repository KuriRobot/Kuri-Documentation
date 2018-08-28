---
layout: reference
title: /volume/button_status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/button_status
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/button_status", ${message}, button_status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/button_status", 1, ${callback});
```

#### Related Documentation
``${message}``  