---
layout: reference
title: /oort_ros_mapping/map/state
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
rosservice call /oort_ros_mapping/map/state ${arguments}
```

#### rospy
```
state_srv = rospy.ServiceProxy("/oort_ros_mapping/map/state", ${message}, 1)
state_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/state");
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