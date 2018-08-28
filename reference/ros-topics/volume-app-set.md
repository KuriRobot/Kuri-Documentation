---
layout: reference
title: /volume/app_set
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/app_set
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/app_set", ${message}, app_set_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/app_set", 1, ${callback});
```

#### Related Documentation
``${message}``  