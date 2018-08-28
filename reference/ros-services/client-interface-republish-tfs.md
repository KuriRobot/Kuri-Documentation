---
layout: reference
title: /client_interface/republish_tfs
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
rosservice call /client_interface/republish_tfs ${arguments}
```

#### rospy
```
republish_tfs_srv = rospy.ServiceProxy("/client_interface/republish_tfs", ${message}, 1)
republish_tfs_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/client_interface/republish_tfs");
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