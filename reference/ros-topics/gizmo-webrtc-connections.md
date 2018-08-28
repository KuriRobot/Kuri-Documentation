---
layout: reference
title: /gizmo_webrtc/connections
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /gizmo_webrtc/connections
```

#### rospy
```
awake_sub = rospy.Subscriber("/gizmo_webrtc/connections", ${message}, connections_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/gizmo_webrtc/connections", 1, ${callback});
```

#### Related Documentation
``${message}``  