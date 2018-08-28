---
layout: reference
title: /image_wp_server/rename
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
rosservice call /image_wp_server/rename ${arguments}
```

#### rospy
```
rename_srv = rospy.ServiceProxy("/image_wp_server/rename", ${message}, 1)
rename_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/image_wp_server/rename");
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