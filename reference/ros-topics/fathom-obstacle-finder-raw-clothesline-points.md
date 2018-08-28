---
layout: reference
title: /fathom_obstacle_finder/raw_clothesline_points
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /fathom_obstacle_finder/raw_clothesline_points
```

#### rospy
```
awake_sub = rospy.Subscriber("/fathom_obstacle_finder/raw_clothesline_points", ${message}, raw_clothesline_points_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/fathom_obstacle_finder/raw_clothesline_points", 1, ${callback});
```

#### Related Documentation
``${message}``  