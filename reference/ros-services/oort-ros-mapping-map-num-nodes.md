---
layout: reference
title: /oort_ros_mapping/map/num_nodes
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
rosservice call /oort_ros_mapping/map/num_nodes ${arguments}
```

#### rospy
```
num_nodes_srv = rospy.ServiceProxy("/oort_ros_mapping/map/num_nodes", ${message}, 1)
num_nodes_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/map/num_nodes");
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