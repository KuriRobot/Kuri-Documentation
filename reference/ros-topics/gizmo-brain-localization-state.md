---
layout: reference
title: /gizmo_brain/localization_state
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/localization_state
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/localization_state", ${message}, localization_state_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/localization_state", 1, ${callback});
```

#### Related Documentation
``${message}``  