---
layout: reference
title: ${topic}
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo ${topic}
```

#### rospy
```
awake_sub = rospy.Subscriber("${topic}", ${message}, ${topic_name}_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("${topic}", 1, ${callback});
```

#### Related Documentation
``${message}``