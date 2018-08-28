---
layout: reference
title: /mobile_base/debug_logger
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
rosservice call /mobile_base/debug_logger ${arguments}
```

#### rospy
```
debug_logger_srv = rospy.ServiceProxy("/mobile_base/debug_logger", ${message}, 1)
debug_logger_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/debug_logger");
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