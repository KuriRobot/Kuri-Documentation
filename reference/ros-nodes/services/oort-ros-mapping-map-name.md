---
layout: reference
title: /oort_ros_mapping/map/name
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
rosservice call /oort_ros_mapping/map/name ${arguments}
```

#### rospy
```
name_srv = rospy.ServiceProxy("/oort_ros_mapping/map/name", ${message}, 1)
name_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/name");
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