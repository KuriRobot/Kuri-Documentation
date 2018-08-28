---
layout: reference
title: /vision/cmds
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
rosservice call /vision/cmds ${arguments}
```

#### rospy
```
cmds_srv = rospy.ServiceProxy("/vision/cmds", ${message}, 1)
cmds_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/vision/cmds");
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