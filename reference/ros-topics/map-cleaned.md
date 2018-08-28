---
layout: reference
title: /map_cleaned
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /map_cleaned
```

#### rospy
```
awake_sub = rospy.Subscriber("/map_cleaned", ${message}, map_cleaned_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/map_cleaned", 1, ${callback});
```

#### Related Documentation
``${message}``  