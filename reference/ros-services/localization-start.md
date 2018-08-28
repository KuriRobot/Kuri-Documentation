---
layout: reference
title: /localization_start
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
rosservice call /localization_start ${arguments}
```

#### rospy
```
localization_start_srv = rospy.ServiceProxy("/localization_start", ${message}, 1)
localization_start_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/localization_start");
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