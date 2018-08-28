---
layout: reference
title: /mobile_base/get_embedded_regs
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
rosservice call /mobile_base/get_embedded_regs ${arguments}
```

#### rospy
```
get_embedded_regs_srv = rospy.ServiceProxy("/mobile_base/get_embedded_regs", ${message}, 1)
get_embedded_regs_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/get_embedded_regs");
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