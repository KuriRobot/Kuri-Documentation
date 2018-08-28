---
layout: reference
title: /bagfile_recorder/start
category: service
tags: 
- bagfile_recorder
---

## Description
Service to call to start the bagfile recorder (it is off by default).

## Usage
#### Console
```
rosservice call /bagfile_recorder/start
```

#### rospy
```
import rospy
import std_srvs.srv

start_srv = rospy.ServiceProxy(
    "/bagfile_recorder/start",
    std_srvs.srv.Empty,
)
start_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient<std_srv::Empty>("/bagfile_recorder/start");
std_srv::Empty srv;
if (client.call(srv))
{
    cout << "Service responded";
}
```

## Response
```{}```
