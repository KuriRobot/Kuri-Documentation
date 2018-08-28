---
layout: reference
title: /moment_actions/actions
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /moment_actions/actions
```

#### rospy
```
awake_sub = rospy.Subscriber("/moment_actions/actions", ${message}, actions_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/moment_actions/actions", 1, ${callback});
```

#### Related Documentation
``${message}``  