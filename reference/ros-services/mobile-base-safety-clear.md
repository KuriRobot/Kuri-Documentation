---
layout: reference
title: /mobile_base/safety_clear
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
rosservice call /mobile_base/safety_clear ${arguments}
```

#### rospy
```
safety_clear_srv = rospy.ServiceProxy("/mobile_base/safety_clear", ${message}, 1)
safety_clear_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/safety_clear");
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