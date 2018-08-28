---
layout: reference
title: /mobile_base/pwr_btn_led
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
rosservice call /mobile_base/pwr_btn_led ${arguments}
```

#### rospy
```
pwr_btn_led_srv = rospy.ServiceProxy("/mobile_base/pwr_btn_led", ${message}, 1)
pwr_btn_led_srv()
```

#### roscpp
```
ros::ServiceClient client = nh.serviceClient${message}("/mobile_base/pwr_btn_led");
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