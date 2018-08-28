---
layout: reference
title: /volume/save
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/save
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/save", ${message}, save_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/save", 1, ${callback});
```

#### Related Documentation
``${message}``  