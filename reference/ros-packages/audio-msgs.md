---
layout: reference
title: audio_msgs
category: package
tags: 
- mayfield_audio
---

## Overview
`audio_msgs` contains all of the message and service message files necessary
for the ``audio_realtime`` and ``audio_voice_delegate`` nodes. This package
must be included as a catkin build dependency by any clients wishing to 
interact with the audio nodes via service calls or subscriptions to ROS topics.

## Usage
package.xml
```
<build_depend>audio_msgs</build_depend>
<run_depend>audio_msgs</run_depend>
```

## Service Messages
``Deafen.srv``  
``GetDirection.srv``  
``GetField.srv``  
``ListFields.srv``  
``SetField.srv``  
``Snooze.srv``  
``Stat.srv``  
``WakeUp.srv``  

## Messages
``Asleep.msg``  
``Awake.msg``  
``Deaf.msg``  
``Exchange.msg``  
``Field.msg``  
``SoundHoundCommand.msg``    
