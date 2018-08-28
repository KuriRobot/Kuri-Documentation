---
layout: reference
title: /audio/voice_delegate/stat
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
rosservice call /audio/voice_delegate/stat ${arguments}
```

#### rospy
```
stat_srv = rospy.ServiceProxy("/audio/voice_delegate/stat", ${message}, 1)
stat_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/audio/voice_delegate/stat");
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