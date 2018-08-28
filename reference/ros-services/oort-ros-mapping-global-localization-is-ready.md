---
layout: reference
title: /oort_ros_mapping/global_localization/is_ready
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
rosservice call /oort_ros_mapping/global_localization/is_ready ${arguments}
```

#### rospy
```
is_ready_srv = rospy.ServiceProxy("/oort_ros_mapping/global_localization/is_ready", ${message}, 1)
is_ready_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/global_localization/is_ready");
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