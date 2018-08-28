---
layout: reference
title: /laser_amcl/set_parameters
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
rosservice call /laser_amcl/set_parameters ${arguments}
```

#### rospy
```
set_parameters_srv = rospy.ServiceProxy("/laser_amcl/set_parameters", ${message}, 1)
set_parameters_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/laser_amcl/set_parameters");
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