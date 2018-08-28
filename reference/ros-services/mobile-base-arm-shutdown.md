---
layout: reference
title: /mobile_base/arm_shutdown
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
rosservice call /mobile_base/arm_shutdown ${arguments}
```

#### rospy
```
arm_shutdown_srv = rospy.ServiceProxy("/mobile_base/arm_shutdown", ${message}, 1)
arm_shutdown_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/arm_shutdown");
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