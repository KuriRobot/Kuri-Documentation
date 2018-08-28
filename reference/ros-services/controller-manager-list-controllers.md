---
layout: reference
title: /controller_manager/list_controllers
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
rosservice call /controller_manager/list_controllers ${arguments}
```

#### rospy
```
list_controllers_srv = rospy.ServiceProxy("/controller_manager/list_controllers", ${message}, 1)
list_controllers_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/list_controllers");
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