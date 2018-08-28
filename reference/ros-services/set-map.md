---
layout: reference
title: /set_map
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
rosservice call /set_map ${arguments}
```

#### rospy
```
set_map_srv = rospy.ServiceProxy("/set_map", ${message}, 1)
set_map_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/set_map");
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