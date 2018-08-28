---
layout: reference
title: /client_interface/filtered_battery_status
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /client_interface/filtered_battery_status
```

#### rospy
```
awake_sub = rospy.Subscriber("/client_interface/filtered_battery_status", ${message}, filtered_battery_status_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/client_interface/filtered_battery_status", 1, ${callback});
```

#### Related Documentation
``${message}``