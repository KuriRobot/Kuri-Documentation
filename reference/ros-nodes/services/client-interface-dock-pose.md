---
layout: reference
title: /client_interface/dock_pose
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
rosservice call /client_interface/dock_pose ${arguments}
```

#### rospy
```
dock_pose_srv = rospy.ServiceProxy("/client_interface/dock_pose", ${message}, 1)
dock_pose_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/client_interface/dock_pose");
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