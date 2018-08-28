---
layout: reference
title: /bagfile_recorder/stop
category: service
tags: 
- bagfile_recorder 
---

## Description
Service to call to stop the bagfile recorder (it is off by default).

## Usage
#### Console
```
rosservice call /bagfile_recorder/stop
```

#### rospy
```
import rospy
import std_srvs.srv

stop_srv = rospy.ServiceProxy(
    "/bagfile_recorder/stop",
    std_srvs.srv.Empty,
)
stop_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient<std_srv::Empty>("/bagfile_recorder/stop");
std_srv::Empty srv;
if (client.call(srv))
{
    cout << "Service responded";
}
```

## Response
```{}```
