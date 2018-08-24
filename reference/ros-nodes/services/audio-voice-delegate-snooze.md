---
layout: reference
title: /audio/voice_delegate/snooze
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
rosservice call /audio/voice_delegate/snooze ${arguments}
```

#### rospy
```
snooze_srv = rospy.ServiceProxy("/audio/voice_delegate/snooze", ${message}, 1)
snooze_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/audio/voice_delegate/snooze");
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