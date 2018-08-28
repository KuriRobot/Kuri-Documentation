---
layout: reference
title: /laser_request_nomotion_update
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
rosservice call /laser_request_nomotion_update ${arguments}
```

#### rospy
```
laser_request_nomotion_update_srv = rospy.ServiceProxy("/laser_request_nomotion_update", ${message}, 1)
laser_request_nomotion_update_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/laser_request_nomotion_update");
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