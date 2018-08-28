---
layout: reference
title: /diagnostics_agg
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /diagnostics_agg
```

#### rospy
```
awake_sub = rospy.Subscriber("/diagnostics_agg", ${message}, diagnostics_agg_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/diagnostics_agg", 1, ${callback});
```

#### Related Documentation
``${message}``  