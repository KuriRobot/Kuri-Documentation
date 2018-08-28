---
layout: reference
title: /mqtt_node/get_loggers
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
rosservice call /mqtt_node/get_loggers ${arguments}
```

#### rospy
```
get_loggers_srv = rospy.ServiceProxy("/mqtt_node/get_loggers", ${message}, 1)
get_loggers_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mqtt_node/get_loggers");
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