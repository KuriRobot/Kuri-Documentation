---
layout: reference
title: /volume/bt_set
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /volume/bt_set
```

#### rospy
```
awake_sub = rospy.Subscriber("/volume/bt_set", ${message}, bt_set_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/volume/bt_set", 1, ${callback});
```

#### Related Documentation
``${message}``  