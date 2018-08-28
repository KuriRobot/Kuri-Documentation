---
layout: reference
title: /cloud_uploader/status
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
rosservice call /cloud_uploader/status ${arguments}
```

#### rospy
```
status_srv = rospy.ServiceProxy("/cloud_uploader/status", ${message}, 1)
status_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/cloud_uploader/status");
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