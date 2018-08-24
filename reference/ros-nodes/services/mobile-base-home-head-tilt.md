---
layout: reference
title: /mobile_base/home_head_tilt
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
rosservice call /mobile_base/home_head_tilt ${arguments}
```

#### rospy
```
home_head_tilt_srv = rospy.ServiceProxy("/mobile_base/home_head_tilt", ${message}, 1)
home_head_tilt_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/home_head_tilt");
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