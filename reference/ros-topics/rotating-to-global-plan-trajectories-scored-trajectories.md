---
layout: reference
title: /rotating_to_global_plan/trajectories/scored_trajectories
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /rotating_to_global_plan/trajectories/scored_trajectories
```

#### rospy
```
awake_sub = rospy.Subscriber("/rotating_to_global_plan/trajectories/scored_trajectories", ${message}, scored_trajectories_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/rotating_to_global_plan/trajectories/scored_trajectories", 1, ${callback});
```

#### Related Documentation
``${message}``  