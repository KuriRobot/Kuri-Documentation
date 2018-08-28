---
layout: reference
title: /oort_ros_mapping/graph_loc/create
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
rosservice call /oort_ros_mapping/graph_loc/create ${arguments}
```

#### rospy
```
create_srv = rospy.ServiceProxy("/oort_ros_mapping/graph_loc/create", ${message}, 1)
create_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/oort_ros_mapping/graph_loc/create");
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