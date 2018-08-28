---
layout: reference
title: /gizmo_webrtc/yawlbridge_49fb3a86_a915_422e_b1fc_543f80bfe5ba/get_loggers
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
rosservice call /gizmo_webrtc/yawlbridge_49fb3a86_a915_422e_b1fc_543f80bfe5ba/get_loggers ${arguments}
```

#### rospy
```
get_loggers_srv = rospy.ServiceProxy("/gizmo_webrtc/yawlbridge_49fb3a86_a915_422e_b1fc_543f80bfe5ba/get_loggers", ${message}, 1)
get_loggers_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/gizmo_webrtc/yawlbridge_49fb3a86_a915_422e_b1fc_543f80bfe5ba/get_loggers");
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