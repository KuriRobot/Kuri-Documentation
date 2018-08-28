---
layout: reference
title: /oort_ros_mapping/global_localization/cancel
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
rosservice call /oort_ros_mapping/global_localization/cancel ${arguments}
```

#### rospy
```
cancel_srv = rospy.ServiceProxy("/oort_ros_mapping/global_localization/cancel", ${message}, 1)
cancel_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/global_localization/cancel");
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