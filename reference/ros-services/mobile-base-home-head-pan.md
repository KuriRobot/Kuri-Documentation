---
layout: reference
title: /mobile_base/home_head_pan
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
rosservice call /mobile_base/home_head_pan ${arguments}
```

#### rospy
```
home_head_pan_srv = rospy.ServiceProxy("/mobile_base/home_head_pan", ${message}, 1)
home_head_pan_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/home_head_pan");
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