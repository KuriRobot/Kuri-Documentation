---
layout: reference
title: /rosout_agg
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /rosout_agg
```

#### rospy
```
awake_sub = rospy.Subscriber("/rosout_agg", ${message}, rosout_agg_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/rosout_agg", 1, ${callback});
```

#### Related Documentation
``${message}``