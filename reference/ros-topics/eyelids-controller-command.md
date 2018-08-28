---
layout: reference
title: /eyelids_controller/command
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /eyelids_controller/command
```

#### rospy
```
awake_sub = rospy.Subscriber("/eyelids_controller/command", ${message}, command_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/eyelids_controller/command", 1, ${callback});
```

#### Related Documentation
``${message}``  