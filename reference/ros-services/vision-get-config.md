---
layout: reference
title: /vision/get_config
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
rosservice call /vision/get_config ${arguments}
```

#### rospy
```
get_config_srv = rospy.ServiceProxy("/vision/get_config", ${message}, 1)
get_config_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/vision/get_config");
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