---
layout: reference
title: cloud_uploader_node
category: node
tags: 
- ${tag}
- ${tag}
- ${tag}
---

## Description
The cloud uploader node is responsible for persisting all files placed into 
`/mayfield/data/user/uploader` off of the robot and into AWS S3. It does this 
using temporary AWS STS credentials which it pulls periodically from the AWS 
cloud back end over MQTT (via the MQTT node). 

Files saved in S3 appear with a prefix and name 
derived from the file name and path on disk.

For example if the uploader were to upload this file:
```bash
/mayfield/data/user/uploader/telemetry/a_telemetry_file.txt
```
It would appear in S3 as:
```bash
s3://bucket-name/telemetry/a_telemetry_file.txt
```

Because the cloud uploader node acts upon all files which appear in its upload
directory, it is important to place files into that directory atomically. This
means that you need to `mv` them in there after producing them elsewhere 
(e.g. `/tmp`) instead of writing them down into `/mayfield/data/user/uploader` 
directly.

To facilitate this usage pattern, the cloud uploader provides a Python
client:
```python
from uploader import CloudUploaderClient
client = CloudUploaderClient()
help(client)
```

## Subscribed Topics
``/mqtt/incoming``  
``/mqtt/online``  
``/mqtt/connected``  

## Published Topics
``/mqtt/outgoing``  

## Services
``/cloud_uploader/shutdown``  
``/cloud_uploader/status``   

## Launch File
``cloud_uploader_node.launch``  