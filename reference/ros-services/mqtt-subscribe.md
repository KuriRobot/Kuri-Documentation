---
layout: reference
title: /mqtt/subscribe
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
rosservice call /mqtt/subscribe ${arguments}
```

#### rospy
```
subscribe_srv = rospy.ServiceProxy("/mqtt/subscribe", ${message}, 1)
subscribe_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mqtt/subscribe");
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