---
layout: reference
title: ${service}
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
rosservice call ${service} ${arguments}
```

#### rospy
```
${service_name}_srv = rospy.ServiceProxy("${service}", ${message}, 1)
${service_name}_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("${service}");
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