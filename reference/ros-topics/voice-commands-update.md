---
layout: reference
title: /voice_commands/update
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /voice_commands/update
```

#### rospy
```
awake_sub = rospy.Subscriber("/voice_commands/update", ${message}, update_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/voice_commands/update", 1, ${callback});
```

#### Related Documentation
``${message}``  