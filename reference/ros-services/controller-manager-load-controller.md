---
layout: reference
title: /controller_manager/load_controller
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
rosservice call /controller_manager/load_controller ${arguments}
```

#### rospy
```
load_controller_srv = rospy.ServiceProxy("/controller_manager/load_controller", ${message}, 1)
load_controller_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/load_controller");
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