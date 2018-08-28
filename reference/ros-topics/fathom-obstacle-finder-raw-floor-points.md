---
layout: reference
title: /fathom_obstacle_finder/raw_floor_points
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /fathom_obstacle_finder/raw_floor_points
```

#### rospy
```
awake_sub = rospy.Subscriber("/fathom_obstacle_finder/raw_floor_points", ${message}, raw_floor_points_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/fathom_obstacle_finder/raw_floor_points", 1, ${callback});
```

#### Related Documentation
``${message}``  