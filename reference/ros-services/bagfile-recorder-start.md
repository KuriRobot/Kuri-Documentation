---
layout: reference
title: /bagfile_recorder/start
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
rosservice call /bagfile_recorder/start ${arguments}
```

#### rospy
```
start_srv = rospy.ServiceProxy("/bagfile_recorder/start", ${message}, 1)
start_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/bagfile_recorder/start");
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