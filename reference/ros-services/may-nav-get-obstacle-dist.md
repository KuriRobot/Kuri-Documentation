---
layout: reference
title: /may_nav/get_obstacle_dist
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
rosservice call /may_nav/get_obstacle_dist ${arguments}
```

#### rospy
```
get_obstacle_dist_srv = rospy.ServiceProxy("/may_nav/get_obstacle_dist", ${message}, 1)
get_obstacle_dist_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/may_nav/get_obstacle_dist");
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