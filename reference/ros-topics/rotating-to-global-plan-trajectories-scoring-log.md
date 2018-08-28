---
layout: reference
title: /rotating_to_global_plan/trajectories/scoring_log
category: topic
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /rotating_to_global_plan/trajectories/scoring_log
```

#### rospy
```
awake_sub = rospy.Subscriber("/rotating_to_global_plan/trajectories/scoring_log", ${message}, scoring_log_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/rotating_to_global_plan/trajectories/scoring_log", 1, ${callback});
```

#### Related Documentation
``${message}``  