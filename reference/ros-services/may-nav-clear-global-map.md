---
layout: reference
title: /may_nav/clear_global_map
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
rosservice call /may_nav/clear_global_map ${arguments}
```

#### rospy
```
clear_global_map_srv = rospy.ServiceProxy("/may_nav/clear_global_map", ${message}, 1)
clear_global_map_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/may_nav/clear_global_map");
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