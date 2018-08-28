---
layout: reference
title: /laser_global_localization
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
rosservice call /laser_global_localization ${arguments}
```

#### rospy
```
laser_global_localization_srv = rospy.ServiceProxy("/laser_global_localization", ${message}, 1)
laser_global_localization_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/laser_global_localization");
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