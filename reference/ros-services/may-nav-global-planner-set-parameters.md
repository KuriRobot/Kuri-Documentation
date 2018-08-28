---
layout: reference
title: /may_nav/global_planner/set_parameters
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
rosservice call /may_nav/global_planner/set_parameters ${arguments}
```

#### rospy
```
set_parameters_srv = rospy.ServiceProxy("/may_nav/global_planner/set_parameters", ${message}, 1)
set_parameters_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/may_nav/global_planner/set_parameters");
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