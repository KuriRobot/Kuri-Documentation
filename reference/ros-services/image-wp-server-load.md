---
layout: reference
title: /image_wp_server/load
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
rosservice call /image_wp_server/load ${arguments}
```

#### rospy
```
load_srv = rospy.ServiceProxy("/image_wp_server/load", ${message}, 1)
load_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/image_wp_server/load");
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