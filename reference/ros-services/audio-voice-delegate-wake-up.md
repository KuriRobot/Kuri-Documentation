---
layout: reference
title: /audio/voice_delegate/wake_up
category: service
tags: 
- ${tag} 
- ${tag}
---

## Description
${description}

## Usage
#### Console
```
rosservice call /audio/voice_delegate/wake_up ${arguments}
```

#### rospy
```
wake_up_srv = rospy.ServiceProxy("/audio/voice_delegate/wake_up", ${message}, 1)
wake_up_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/audio/voice_delegate/wake_up");
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