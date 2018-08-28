---
layout: reference
title: /controller_manager/list_controller_types
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
rosservice call /controller_manager/list_controller_types ${arguments}
```

#### rospy
```
list_controller_types_srv = rospy.ServiceProxy("/controller_manager/list_controller_types", ${message}, 1)
list_controller_types_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/list_controller_types");
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