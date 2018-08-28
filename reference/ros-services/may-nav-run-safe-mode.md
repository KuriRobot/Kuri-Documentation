---
layout: reference
title: /may_nav/run_safe_mode
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
rosservice call /may_nav/run_safe_mode ${arguments}
```

#### rospy
```
run_safe_mode_srv = rospy.ServiceProxy("/may_nav/run_safe_mode", ${message}, 1)
run_safe_mode_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/may_nav/run_safe_mode");
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