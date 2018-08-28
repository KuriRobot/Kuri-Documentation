---
layout: reference
title: /oort_ros_mapping/map/map
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
rosservice call /oort_ros_mapping/map/map ${arguments}
```

#### rospy
```
map_srv = rospy.ServiceProxy("/oort_ros_mapping/map/map", ${message}, 1)
map_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/map");
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