---
layout: reference
title: /rotating_to_global_plan/trajectories/markers
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /rotating_to_global_plan/trajectories/markers
```

#### rospy
```
awake_sub = rospy.Subscriber("/rotating_to_global_plan/trajectories/markers", ${message}, markers_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/rotating_to_global_plan/trajectories/markers", 1, ${callback});
```

#### Related Documentation
``${message}``  