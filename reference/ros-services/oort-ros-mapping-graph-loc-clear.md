---
layout: reference
title: /oort_ros_mapping/graph_loc/clear
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
rosservice call /oort_ros_mapping/graph_loc/clear ${arguments}
```

#### rospy
```
clear_srv = rospy.ServiceProxy("/oort_ros_mapping/graph_loc/clear", ${message}, 1)
clear_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/graph_loc/clear");
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