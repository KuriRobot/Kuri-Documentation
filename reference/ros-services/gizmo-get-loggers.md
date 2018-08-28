---
layout: reference
title: /gizmo/get_loggers
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
rosservice call /gizmo/get_loggers ${arguments}
```

#### rospy
```
get_loggers_srv = rospy.ServiceProxy("/gizmo/get_loggers", ${message}, 1)
get_loggers_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/gizmo/get_loggers");
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