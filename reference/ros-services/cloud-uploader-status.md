---
layout: reference
title: /cloud_uploader/status
category: service
tags: 
- ${tag} 
- ${tag}
---

## Description
A ROS service which returns the queue directory which the cloud uploader is 
currently watching, if the cloud uplodaer is still active and waiting to upload
files.

## Usage
#### Console
```
rosservice call /cloud_uploader/status
```

#### rospy
```
status_srv = rospy.ServiceProxy("/cloud_uploader/status", gizmo_msgs.srv.UploaderStatus, 1)
status_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient<gizmo_msgs::UploaderStatus>("/cloud_uploader/status");
gizmo_msgs::UploaderStatus srv;
...
if (client.call(srv))
{
    cout << "Service responded with message";
}
```

## Response
```
uploader_queue: /mayfield/data/user/uploader
```
  