---
layout: reference
title: /moment/post_check
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /moment/post_check
```

#### rospy
```
awake_sub = rospy.Subscriber("/moment/post_check", ${message}, post_check_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/moment/post_check", 1, ${callback});
```

#### Related Documentation
``${message}``  