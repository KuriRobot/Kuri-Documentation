---
layout: reference
title: /vision/active_modules
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
rosservice call /vision/active_modules ${arguments}
```

#### rospy
```
active_modules_srv = rospy.ServiceProxy("/vision/active_modules", ${message}, 1)
active_modules_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/vision/active_modules");
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