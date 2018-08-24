---
layout: reference
title: /controller_manager/unload_controller
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
rosservice call /controller_manager/unload_controller ${arguments}
```

#### rospy
```
unload_controller_srv = rospy.ServiceProxy("/controller_manager/unload_controller", ${message}, 1)
unload_controller_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/unload_controller");
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