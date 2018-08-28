---
layout: reference
title: /mobile_base/pid/head_tilt_pos/parameter_descriptions
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /mobile_base/pid/head_tilt_pos/parameter_descriptions
```

#### rospy
```
awake_sub = rospy.Subscriber("/mobile_base/pid/head_tilt_pos/parameter_descriptions", ${message}, parameter_descriptions_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/mobile_base/pid/head_tilt_pos/parameter_descriptions", 1, ${callback});
```

#### Related Documentation
``${message}``  