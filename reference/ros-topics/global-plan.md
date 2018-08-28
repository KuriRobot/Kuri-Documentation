---
layout: reference
title: /global_plan
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /global_plan
```

#### rospy
```
awake_sub = rospy.Subscriber("/global_plan", ${message}, global_plan_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/global_plan", 1, ${callback});
```

#### Related Documentation
``${message}``  