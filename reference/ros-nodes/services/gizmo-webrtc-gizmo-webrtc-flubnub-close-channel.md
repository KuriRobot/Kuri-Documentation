---
layout: reference
title: /gizmo_webrtc/gizmo_webrtc_flubnub/close_channel
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
rosservice call /gizmo_webrtc/gizmo_webrtc_flubnub/close_channel ${arguments}
```

#### rospy
```
close_channel_srv = rospy.ServiceProxy("/gizmo_webrtc/gizmo_webrtc_flubnub/close_channel", ${message}, 1)
close_channel_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/gizmo_webrtc/gizmo_webrtc_flubnub/close_channel");
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