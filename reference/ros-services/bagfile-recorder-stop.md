---
layout: reference
title: /bagfile_recorder/stop
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
rosservice call /bagfile_recorder/stop ${arguments}
```

#### rospy
```
stop_srv = rospy.ServiceProxy("/bagfile_recorder/stop", ${message}, 1)
stop_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/bagfile_recorder/stop");
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