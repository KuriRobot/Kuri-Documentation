---
layout: reference
title: /mobile_base/depth_sensor_reset
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
rosservice call /mobile_base/depth_sensor_reset ${arguments}
```

#### rospy
```
depth_sensor_reset_srv = rospy.ServiceProxy("/mobile_base/depth_sensor_reset", ${message}, 1)
depth_sensor_reset_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/depth_sensor_reset");
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