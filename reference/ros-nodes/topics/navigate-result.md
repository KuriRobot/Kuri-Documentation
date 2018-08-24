---
layout: reference
title: /navigate/result
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /navigate/result
```

#### rospy
```
awake_sub = rospy.Subscriber("/navigate/result", ${message}, result_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/navigate/result", 1, ${callback});
```

#### Related Documentation
``${message}``