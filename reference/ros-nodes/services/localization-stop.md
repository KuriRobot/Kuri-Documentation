---
layout: reference
title: /localization_stop
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
rosservice call /localization_stop ${arguments}
```

#### rospy
```
localization_stop_srv = rospy.ServiceProxy("/localization_stop", ${message}, 1)
localization_stop_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/localization_stop");
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