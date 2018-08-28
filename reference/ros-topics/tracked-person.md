---
layout: reference
title: /tracked_person
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /tracked_person
```

#### rospy
```
awake_sub = rospy.Subscriber("/tracked_person", ${message}, tracked_person_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/tracked_person", 1, ${callback});
```

#### Related Documentation
``${message}``  