---
layout: reference
title: /lost_detector/reset
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
rosservice call /lost_detector/reset ${arguments}
```

#### rospy
```
reset_srv = rospy.ServiceProxy("/lost_detector/reset", ${message}, 1)
reset_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/lost_detector/reset");
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