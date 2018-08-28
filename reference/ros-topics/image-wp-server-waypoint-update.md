---
layout: reference
title: /image_wp_server/waypoint_update
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /image_wp_server/waypoint_update
```

#### rospy
```
awake_sub = rospy.Subscriber("/image_wp_server/waypoint_update", ${message}, waypoint_update_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/image_wp_server/waypoint_update", 1, ${callback});
```

#### Related Documentation
``${message}``  