---
layout: reference
title: /laser_amcl/parameter_descriptions
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /laser_amcl/parameter_descriptions
```

#### rospy
```
awake_sub = rospy.Subscriber("/laser_amcl/parameter_descriptions", ${message}, parameter_descriptions_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/laser_amcl/parameter_descriptions", 1, ${callback});
```

#### Related Documentation
``${message}``  