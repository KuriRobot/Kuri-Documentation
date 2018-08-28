---
layout: reference
title: /oort_ros_mapping/global_localization/select_scan
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
rosservice call /oort_ros_mapping/global_localization/select_scan ${arguments}
```

#### rospy
```
select_scan_srv = rospy.ServiceProxy("/oort_ros_mapping/global_localization/select_scan", ${message}, 1)
select_scan_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/global_localization/select_scan");
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