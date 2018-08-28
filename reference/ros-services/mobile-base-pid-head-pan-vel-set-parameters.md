---
layout: reference
title: /mobile_base/pid/head_pan_vel/set_parameters
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
rosservice call /mobile_base/pid/head_pan_vel/set_parameters ${arguments}
```

#### rospy
```
set_parameters_srv = rospy.ServiceProxy("/mobile_base/pid/head_pan_vel/set_parameters", ${message}, 1)
set_parameters_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/pid/head_pan_vel/set_parameters");
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