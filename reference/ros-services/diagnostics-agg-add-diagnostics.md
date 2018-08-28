---
layout: reference
title: /diagnostics_agg/add_diagnostics
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
rosservice call /diagnostics_agg/add_diagnostics ${arguments}
```

#### rospy
```
add_diagnostics_srv = rospy.ServiceProxy("/diagnostics_agg/add_diagnostics", ${message}, 1)
add_diagnostics_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/diagnostics_agg/add_diagnostics");
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