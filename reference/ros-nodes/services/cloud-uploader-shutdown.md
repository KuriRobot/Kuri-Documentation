---
layout: reference
title: /cloud_uploader/shutdown
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
rosservice call /cloud_uploader/shutdown ${arguments}
```

#### rospy
```
shutdown_srv = rospy.ServiceProxy("/cloud_uploader/shutdown", ${message}, 1)
shutdown_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/cloud_uploader/shutdown");
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