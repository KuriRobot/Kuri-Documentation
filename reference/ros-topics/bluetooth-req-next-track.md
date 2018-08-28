---
layout: reference
title: /bluetooth/req_next_track
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /bluetooth/req_next_track
```

#### rospy
```
awake_sub = rospy.Subscriber("/bluetooth/req_next_track", ${message}, req_next_track_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/bluetooth/req_next_track", 1, ${callback});
```

#### Related Documentation
``${message}``