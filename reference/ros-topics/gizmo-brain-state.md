---
layout: reference
title: /gizmo_brain/state
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/state
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/state", ${message}, state_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/state", 1, ${callback});
```

#### Related Documentation
``${message}``