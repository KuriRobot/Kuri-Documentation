---
layout: reference
title: /controller_manager/switch_controller
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
rosservice call /controller_manager/switch_controller ${arguments}
```

#### rospy
```
switch_controller_srv = rospy.ServiceProxy("/controller_manager/switch_controller", ${message}, 1)
switch_controller_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/switch_controller");
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