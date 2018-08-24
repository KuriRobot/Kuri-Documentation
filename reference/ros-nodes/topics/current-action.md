---
layout: reference
title: /current_action
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /current_action
```

#### rospy
```
awake_sub = rospy.Subscriber("/current_action", ${message}, current_action_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/current_action", 1, ${callback});
```

#### Related Documentation
``${message}``