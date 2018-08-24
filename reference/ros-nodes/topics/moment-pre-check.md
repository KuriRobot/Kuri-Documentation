---
layout: reference
title: /moment/pre_check
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /moment/pre_check
```

#### rospy
```
awake_sub = rospy.Subscriber("/moment/pre_check", ${message}, pre_check_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/moment/pre_check", 1, ${callback});
```

#### Related Documentation
``${message}``