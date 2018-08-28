---
layout: reference
title: /gizmo_brain/touch
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/touch
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/touch", ${message}, touch_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/touch", 1, ${callback});
```

#### Related Documentation
``${message}``  