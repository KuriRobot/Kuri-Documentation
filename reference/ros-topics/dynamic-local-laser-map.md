---
layout: reference
title: /dynamic_local_laser_map
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /dynamic_local_laser_map
```

#### rospy
```
awake_sub = rospy.Subscriber("/dynamic_local_laser_map", ${message}, dynamic_local_laser_map_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/dynamic_local_laser_map", 1, ${callback});
```

#### Related Documentation
``${message}``