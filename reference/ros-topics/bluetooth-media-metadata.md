---
layout: reference
title: /bluetooth/media_metadata
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/media_metadata
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/media_metadata", ${message}, media_metadata_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/media_metadata", 1, ${callback});
```

#### Related Documentation
``${message}``  