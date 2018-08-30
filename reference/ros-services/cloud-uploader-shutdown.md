---
layout: reference
title: /cloud_uploader/shutdown
category: service
tags: 
- ${tag} 
- ${tag}
---

## Description
Stops the cloud uploader's internal upload thread. Calling this service once
will irrevocably stop all uploads for the life of the cloud uploader process.

## Usage
#### Console
```
rosservice call /cloud_uploader/shutdown
```

#### rospy
```
shutdown_srv = rospy.ServiceProxy("/cloud_uploader/shutdown", std_msgs.Empty, 1)
shutdown_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient<std_msgs::Empty>("/cloud_uploader/shutdown");
std_srv::Empty srv;
...
if (client.call(srv))
{
    cout << "Service responded with message";
}
```

## Response
```
{}
```
