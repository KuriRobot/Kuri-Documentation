---
layout: reference
title: /speaker_phone/list_fields
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
rosservice call /speaker_phone/list_fields ${arguments}
```

#### rospy
```
list_fields_srv = rospy.ServiceProxy("/speaker_phone/list_fields", ${message}, 1)
list_fields_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/speaker_phone/list_fields");
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