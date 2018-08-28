---
layout: reference
title: /static_global_map
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /static_global_map
```

#### rospy
```
awake_sub = rospy.Subscriber("/static_global_map", ${message}, static_global_map_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/static_global_map", 1, ${callback});
```

#### Related Documentation
``${message}``  