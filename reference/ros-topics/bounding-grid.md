---
layout: reference
title: /bounding_grid
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bounding_grid
```

#### rospy
```
awake_sub = rospy.Subscriber("/bounding_grid", ${message}, bounding_grid_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bounding_grid", 1, ${callback});
```

#### Related Documentation
``${message}``