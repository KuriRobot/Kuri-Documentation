---
layout: reference
title: /oort_ros_mapping/map/resume_from_paused
category: services
tags: 
- ${tag} 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rosservice call /oort_ros_mapping/map/resume_from_paused ${arguments}
```

#### rospy
```
resume_from_paused_srv = rospy.ServiceProxy("/oort_ros_mapping/map/resume_from_paused", ${message}, 1)
resume_from_paused_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/resume_from_paused");
${message} msg;
...
if (client.call(msg))
{
    cout << "Service responded with message";
}
```

## Response
```
${paste the response from calling the service on the console}
```

## Related Documentation
``${message}``  