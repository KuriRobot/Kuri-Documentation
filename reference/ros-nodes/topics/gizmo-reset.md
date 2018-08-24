---
layout: reference
title: /gizmo_reset
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_reset
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_reset", ${message}, gizmo_reset_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_reset", 1, ${callback});
```

#### Related Documentation
``${message}``