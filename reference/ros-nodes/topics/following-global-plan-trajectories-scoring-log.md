---
layout: reference
title: /following_global_plan/trajectories/scoring_log
category: topics
tags: 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rostopic echo /following_global_plan/trajectories/scoring_log
```

#### rospy
```
awake_sub = rospy.Subscriber("/following_global_plan/trajectories/scoring_log", ${message}, scoring_log_cb, 1)
def ${topic name}_cb(msg):
    print "${message} message was published"
```

#### roscpp
```
void ${callback}(const ${message-shared-ptr}& msg)
{
    cout ${${ "${message} message was published";
}
ros::Subscriber sub = nh.subscribe("/following_global_plan/trajectories/scoring_log", 1, ${callback});
```

#### Related Documentation
``${message}``