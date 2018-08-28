---
layout: reference
title: /command/query
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
rosservice call /command/query ${arguments}
```

#### rospy
```
query_srv = rospy.ServiceProxy("/command/query", ${message}, 1)
query_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/command/query");
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