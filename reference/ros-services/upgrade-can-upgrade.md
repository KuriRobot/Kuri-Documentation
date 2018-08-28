---
layout: reference
title: /upgrade/can_upgrade
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
rosservice call /upgrade/can_upgrade ${arguments}
```

#### rospy
```
can_upgrade_srv = rospy.ServiceProxy("/upgrade/can_upgrade", ${message}, 1)
can_upgrade_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/upgrade/can_upgrade");
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