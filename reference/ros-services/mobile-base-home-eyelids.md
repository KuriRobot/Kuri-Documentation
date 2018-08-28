---
layout: reference
title: /mobile_base/home_eyelids
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
rosservice call /mobile_base/home_eyelids ${arguments}
```

#### rospy
```
home_eyelids_srv = rospy.ServiceProxy("/mobile_base/home_eyelids", ${message}, 1)
home_eyelids_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/home_eyelids");
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