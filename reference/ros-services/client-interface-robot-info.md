---
layout: reference
title: /client_interface/robot_info
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
rosservice call /client_interface/robot_info ${arguments}
```

#### rospy
```
robot_info_srv = rospy.ServiceProxy("/client_interface/robot_info", ${message}, 1)
robot_info_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/client_interface/robot_info");
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