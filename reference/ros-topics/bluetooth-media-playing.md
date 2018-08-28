---
layout: reference
title: /bluetooth/media_playing
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/media_playing
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/media_playing", ${message}, media_playing_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/media_playing", 1, ${callback});
```

#### Related Documentation
``${message}``