---
layout: reference
title: /gizmo_brain/tf2_frames
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
rosservice call /gizmo_brain/tf2_frames ${arguments}
```

#### rospy
```
tf2_frames_srv = rospy.ServiceProxy("/gizmo_brain/tf2_frames", ${message}, 1)
tf2_frames_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/gizmo_brain/tf2_frames");
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