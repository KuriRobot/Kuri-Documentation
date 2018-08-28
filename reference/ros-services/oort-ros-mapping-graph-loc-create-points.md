---
layout: reference
title: /oort_ros_mapping/graph_loc/create_points
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
rosservice call /oort_ros_mapping/graph_loc/create_points ${arguments}
```

#### rospy
```
create_points_srv = rospy.ServiceProxy("/oort_ros_mapping/graph_loc/create_points", ${message}, 1)
create_points_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/graph_loc/create_points");
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