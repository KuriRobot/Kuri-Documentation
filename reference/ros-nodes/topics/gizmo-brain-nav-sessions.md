---
layout: reference
title: /gizmo_brain/nav_sessions
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/nav_sessions
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/nav_sessions", ${message}, nav_sessions_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/nav_sessions", 1, ${callback});
```

#### Related Documentation
``${message}``