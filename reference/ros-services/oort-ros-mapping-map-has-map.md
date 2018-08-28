---
layout: reference
title: /oort_ros_mapping/map/has_map
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
rosservice call /oort_ros_mapping/map/has_map ${arguments}
```

#### rospy
```
has_map_srv = rospy.ServiceProxy("/oort_ros_mapping/map/has_map", ${message}, 1)
has_map_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/has_map");
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