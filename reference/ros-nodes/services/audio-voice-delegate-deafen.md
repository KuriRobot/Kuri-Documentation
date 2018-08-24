---
layout: reference
title: /audio/voice_delegate/deafen
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
rosservice call /audio/voice_delegate/deafen ${arguments}
```

#### rospy
```
deafen_srv = rospy.ServiceProxy("/audio/voice_delegate/deafen", ${message}, 1)
deafen_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/audio/voice_delegate/deafen");
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