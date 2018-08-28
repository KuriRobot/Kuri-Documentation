---
layout: reference
title: /oort_ros_mapping/graph_loc/list_namespaces
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
rosservice call /oort_ros_mapping/graph_loc/list_namespaces ${arguments}
```

#### rospy
```
list_namespaces_srv = rospy.ServiceProxy("/oort_ros_mapping/graph_loc/list_namespaces", ${message}, 1)
list_namespaces_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/graph_loc/list_namespaces");
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