---
layout: reference
title: /gizmo_webrtc/gizmo_webrtc_flubnub/channels
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
rosservice call /gizmo_webrtc/gizmo_webrtc_flubnub/channels ${arguments}
```

#### rospy
```
channels_srv = rospy.ServiceProxy("/gizmo_webrtc/gizmo_webrtc_flubnub/channels", ${message}, 1)
channels_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/gizmo_webrtc/gizmo_webrtc_flubnub/channels");
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