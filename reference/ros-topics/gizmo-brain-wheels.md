---
layout: reference
title: /gizmo_brain/wheels
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/wheels
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/wheels", ${message}, wheels_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/wheels", 1, ${callback});
```

#### Related Documentation
``${message}``  