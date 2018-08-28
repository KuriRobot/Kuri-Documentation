---
layout: reference
title: /gizmo_brain/bump
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_brain/bump
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_brain/bump", ${message}, bump_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_brain/bump", 1, ${callback});
```

#### Related Documentation
``${message}``  