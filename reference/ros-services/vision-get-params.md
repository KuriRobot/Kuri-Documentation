---
layout: reference
title: /vision/get_params
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
rosservice call /vision/get_params ${arguments}
```

#### rospy
```
get_params_srv = rospy.ServiceProxy("/vision/get_params", ${message}, 1)
get_params_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/vision/get_params");
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