---
layout: reference
title: cloud_uploader_node.launch
category: launch
---

## Launch File Definition
```
<launch>

  <!-- Use a non-standard location for the upload queue.  The tmp directory
       can be found by using the cloud_uploader/status service -->
  <arg name="use_tmpdir" default="False"/>
  <arg name="local_s3" default="False"/>
  <arg name="respawn" default="True"/>
  <arg name="cla" default=""/>
  <arg name="cwd" default="ROS_HOME"/>

  <param name="cloud_uploader_node/local_s3" value="$(arg local_s3)"/>
  <param name="cloud_uploader_node/use_tmpdir_queue" value="$(arg use_tmpdir)"/>
  <node name="cloud_uploader_node"
        pkg="gizmo"
        type="cloud_uploader_node"
        args="$(arg cla)"
        respawn="$(arg respawn)"
        respawn_delay="10"
        cwd="$(arg cwd)"/>

</launch>
```

## Arguments
#### `use_tmpdir`
Optionally, use a temporary directory for the upload queue. The node generates
a random directory in `/tmp` automatically if this flag is set - you can call
the cloud_uploader/status service to find the exact name of the temp directory.

#### `local_s3`
Sets the uploader's URL to a local URL that communicates with a fake 
Amazon S3 instance running locally, instead of the actual remote endpoint.

## ROS Node
``cloud_uploader_node``
