---
layout: reference
title: /speaker_phone/set_field
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
rosservice call /speaker_phone/set_field ${arguments}
```

#### rospy
```
set_field_srv = rospy.ServiceProxy("/speaker_phone/set_field", ${message}, 1)
set_field_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/speaker_phone/set_field");
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