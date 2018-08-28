---
layout: reference
title: /oort_ros_mapping/map/notify_docked
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
rosservice call /oort_ros_mapping/map/notify_docked ${arguments}
```

#### rospy
```
notify_docked_srv = rospy.ServiceProxy("/oort_ros_mapping/map/notify_docked", ${message}, 1)
notify_docked_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/notify_docked");
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