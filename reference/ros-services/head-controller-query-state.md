---
layout: reference
title: /head_controller/query_state
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
rosservice call /head_controller/query_state ${arguments}
```

#### rospy
```
query_state_srv = rospy.ServiceProxy("/head_controller/query_state", ${message}, 1)
query_state_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/head_controller/query_state");
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