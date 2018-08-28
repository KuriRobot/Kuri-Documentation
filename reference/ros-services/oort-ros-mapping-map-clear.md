---
layout: reference
title: /oort_ros_mapping/map/clear
category: service
tags: 
- ${tag} 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rosservice call /oort_ros_mapping/map/clear ${arguments}
```

#### rospy
```
clear_srv = rospy.ServiceProxy("/oort_ros_mapping/map/clear", ${message}, 1)
clear_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/clear");
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