---
layout: reference
title: /amcl_adjusted_scans
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /amcl_adjusted_scans
```

#### rospy
```
awake_sub = rospy.Subscriber("/amcl_adjusted_scans", ${message}, amcl_adjusted_scans_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/amcl_adjusted_scans", 1, ${callback});
```

#### Related Documentation
``${message}``