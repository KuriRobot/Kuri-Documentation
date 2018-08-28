---
layout: reference
title: /speaker_phone/get_direction
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
rosservice call /speaker_phone/get_direction ${arguments}
```

#### rospy
```
get_direction_srv = rospy.ServiceProxy("/speaker_phone/get_direction", ${message}, 1)
get_direction_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/speaker_phone/get_direction");
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