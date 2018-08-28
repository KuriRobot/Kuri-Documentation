---
layout: reference
title: /oort_ros_mapping/graph_loc/delete
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
rosservice call /oort_ros_mapping/graph_loc/delete ${arguments}
```

#### rospy
```
delete_srv = rospy.ServiceProxy("/oort_ros_mapping/graph_loc/delete", ${message}, 1)
delete_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/graph_loc/delete");
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