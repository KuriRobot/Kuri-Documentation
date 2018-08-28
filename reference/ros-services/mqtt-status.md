---
layout: reference
title: /mqtt/status
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
rosservice call /mqtt/status ${arguments}
```

#### rospy
```
status_srv = rospy.ServiceProxy("/mqtt/status", ${message}, 1)
status_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mqtt/status");
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