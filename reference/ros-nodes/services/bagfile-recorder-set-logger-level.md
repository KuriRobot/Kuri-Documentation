---
layout: reference
title: /bagfile_recorder/set_logger_level
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
rosservice call /bagfile_recorder/set_logger_level ${arguments}
```

#### rospy
```
set_logger_level_srv = rospy.ServiceProxy("/bagfile_recorder/set_logger_level", ${message}, 1)
set_logger_level_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/bagfile_recorder/set_logger_level");
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