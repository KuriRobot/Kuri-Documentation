---
layout: reference
title: /set_nav_mode
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
rosservice call /set_nav_mode ${arguments}
```

#### rospy
```
set_nav_mode_srv = rospy.ServiceProxy("/set_nav_mode", ${message}, 1)
set_nav_mode_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/set_nav_mode");
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