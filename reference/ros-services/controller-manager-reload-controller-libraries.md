---
layout: reference
title: /controller_manager/reload_controller_libraries
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
rosservice call /controller_manager/reload_controller_libraries ${arguments}
```

#### rospy
```
reload_controller_libraries_srv = rospy.ServiceProxy("/controller_manager/reload_controller_libraries", ${message}, 1)
reload_controller_libraries_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/controller_manager/reload_controller_libraries");
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