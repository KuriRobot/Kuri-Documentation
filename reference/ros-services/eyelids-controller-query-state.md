---
layout: reference
title: /eyelids_controller/query_state
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
rosservice call /eyelids_controller/query_state ${arguments}
```

#### rospy
```
query_state_srv = rospy.ServiceProxy("/eyelids_controller/query_state", ${message}, 1)
query_state_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/eyelids_controller/query_state");
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