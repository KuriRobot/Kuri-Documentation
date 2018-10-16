---
layout: reference
title: amcl.launch
category: launch
tags: 
- amcl
- localization
- particle filter
---

## Launch File Definition
```
<launch>
  <!-- set this to true if you want amcl to start without having to call the localization start service -->
  <arg name="auto_start" default="false"/>
  <arg name="use_prob_model" default="false"/>

  <!-- likelihood_field model is better at not getting lost; likelihood_field_prob model is better for mapping-->
  <arg if="$(arg use_prob_model)" name="prob_model" default="likelihood_field_prob"/>
  <arg unless="$(arg use_prob_model)" name="prob_model" default="likelihood_field"/>

  <arg name="min_particles" default="3000"/>
  <arg name="use_map_topic" default="true"/>
  <arg name="init_global_pose" default="false"/>    
  <arg name="scan_topic" default="scan" />
  <arg name="base_frame_id" default="base_footprint" />
  <arg name="odom_frame_id" default="odom" />
  <arg name="initial_pose_x" default="0.0" />
  <arg name="initial_pose_y" default="0.0" />
  <arg name="initial_pose_a" default="0.0" />
  <arg name="tf_broadcast" default="true" />
  <arg name="max_beams" default="60" />
  <arg name="topic_prefix" default="laser"/>
  <arg name="laser_sigma_hit" default="0.3"/>
  <arg name="do_beamskip" default="true"/>
  <arg name="resample_interval" default="3"/>
  <arg name="initial_pose_channel" default="initialpose"/>
  <arg name="draw_laser_points" default="false"/>
  <arg name="publish_test_frame" default="false"/>
  <arg name="odom_only" default="false"/>
  <arg name="publish_basic_pose" default="true"/>
  <arg name="map_topic" default="map"/>
  <arg name="use_cov_from_params" default="false" />
  <arg name="use_tf_to_update_initial_pose" default="false" />
  <arg name="initial_cov" default="0.01"/>
  <arg name="initial_cov_rot" default="0.069"/>
  <arg name="transform_tolerance" default="1.0"/>
  <arg name="update_min_d" default="0.1"/>
  <arg name="laser_max_range" default="5.0"/>

  <!-- default params for likelihood_field model -->
  <arg unless="$(arg use_prob_model)" name="odom_alpha1" default="0.3"/>
  <arg unless="$(arg use_prob_model)" name="odom_alpha2" default="0.3"/>
  <arg unless="$(arg use_prob_model)" name="odom_alpha3" default="0.25"/>
  <arg unless="$(arg use_prob_model)" name="odom_alpha4" default="0.25"/>

  <!-- default params for likelihood_field_prob model -->
  <arg if="$(arg use_prob_model)" name="odom_alpha1" default="0.35"/>
  <arg if="$(arg use_prob_model)" name="odom_alpha2" default="0.35"/>
  <arg if="$(arg use_prob_model)" name="odom_alpha3" default="0.3"/>
  <arg if="$(arg use_prob_model)" name="odom_alpha4" default="0.3"/>

  <node pkg="amcl" type="amcl" name="$(arg topic_prefix)_amcl" respawn="true" respawn_delay="2.0">
    <param name="auto_start" value="$(arg auto_start)"/>
    <param name="publish_basic_pose" value="$(arg publish_basic_pose)"/>    
    <param name="draw_laser_points" value="$(arg draw_laser_points)"/>
    <!-- <rosparam param="laser_colors"> -->
    <!--   [0, 1.0, .0] -->
    <!-- </rosparam> -->
    <param name="publish_test_frame" value="$(arg publish_test_frame)"/>
    <param name="test_frame_id" value="$(arg topic_prefix)_base_footprint"/>
    <param name="publish_basic_pose_on_convergence" value="false"/>
    <param name="tf_broadcast" value="$(arg tf_broadcast)"/>
    <param name="init_global" value="$(arg init_global_pose)"/> 
    <param name="draw_weight_as_height" value="true"/>
    <param name="initial_pose_x" value="$(arg initial_pose_x)"/>
    <param name="initial_pose_y" value="$(arg initial_pose_y)"/>
    <param name="initial_pose_a" value="$(arg initial_pose_a)"/>
    <param name="base_frame_id" value="$(arg base_frame_id)"/>
    <param name="use_map_topic" value="$(arg use_map_topic)"/>
    <!--<param name="scan_topic" value="$(arg scan_topic)"/>-->
    <!-- Publish scans from best pose at a max of 10 Hz -->
    <param name="odom_model_type" value="diff"/>
    <param name="gui_publish_rate" value="10.0"/>
    <param name="laser_max_beams" value="$(arg max_beams)"/>
    <param name="laser_max_range" value="$(arg laser_max_range)"/>
    <param name="min_particles" value="$(arg min_particles)"/>
    <param name="max_particles" value="10000"/>
    <param name="kld_err" value="0.05"/>
    <param name="kld_z" value="0.99"/>

    <param name="penalize_unknown" value="true"/>
    <param name="unknown_radius" value="6"/>
    <param name="unknown_threshold" value="0.6"/>
    <param name="unknown_min_penalty" value="0.2"/>

    <param name="do_beamskip" value="$(arg do_beamskip)"/>
    <param name="beam_skip_distance" value="0.3"/>
    <param name="beam_skip_threshold" value="0.3"/>    
    <param name="use_cov_from_params" value="$(arg use_cov_from_params)"/>  
    <param name="use_tf_to_update_initial_pose" value="$(arg use_tf_to_update_initial_pose)"/>  
    <param name="std_xx" value="$(arg initial_cov)"/>
    <param name="std_yy" value="$(arg initial_cov)"/>
    <param name="std_tt" value="$(arg initial_cov_rot)"/>
    <!-- <param name="std_xx" value="0.25"/> -->
    <!-- <param name="std_yy" value="0.25"/> -->
    <!-- <param name="std_tt" value="0.616850"/> -->
    
    <!--alpha 1 and 2 impact std for rotation motions-->
    <param name="odom_alpha1" value="$(arg odom_alpha1)"/>
    <param name="odom_alpha2" value="$(arg odom_alpha2)"/>    
    <!-- translation std dev, m -->
    <param name="odom_alpha3" value="$(arg odom_alpha3)"/>
    <param name="odom_alpha4" value="$(arg odom_alpha4)"/> 
    <param name="odom_alpha5" value="0.1"/> <!--This is not used for the diff motion model-->
    <param name="stuck_prob" value="0.05"/>
    <param name="laser_z_hit" value="0.5"/>
    <param name="laser_z_short" value="0.1"/>
    <param name="laser_z_max" value="0.05"/>
    <param name="laser_z_rand" value="0.35"/>
    <param name="laser_sigma_hit" value="$(arg laser_sigma_hit)"/>
    <param name="laser_lambda_short" value="0.1"/>
    <param name="laser_model_type" value="$(arg prob_model)"/>
    <!-- <param name="laser_model_type" value="beam"/> -->
    <param name="laser_likelihood_max_dist" value="2.0"/>
    <param name="update_min_d" value="$(arg update_min_d)"/>
    <param name="update_min_a" value="0.2"/> 
    <param name="odom_frame_id" value="$(arg odom_frame_id)"/>
    <param name="resample_interval" value="$(arg resample_interval)"/>
    <param name="transform_tolerance" value="$(arg transform_tolerance)"/>
    <param name="recovery_alpha_slow" value="0.0"/>
    <param name="recovery_alpha_fast" value="0.0"/>
    <param name="odom_only" value="$(arg odom_only)"/>   <!-- do not publish map to odom TF, odom only localization -->
    <remap from="scan" to="$(arg scan_topic)"/>
    <remap from="amcl_pose" to="$(arg topic_prefix)_amcl_pose"/>
    <remap from="amcl_basic_pose" to="$(arg topic_prefix)_amcl_basic_pose"/>
    <remap from="particlecloud" to="$(arg topic_prefix)_particlecloud"/>
    <remap from="global_localization" to="$(arg topic_prefix)_global_localization"/>
    <remap from="request_nomotion_update" to="$(arg topic_prefix)_request_nomotion_update"/>
    <remap from="initialpose" to="$(arg initial_pose_channel)"/>
    <remap from="map" to="$(arg map_topic)"/>
  </node>
</launch>
```

## Arguments
#### `auto_start`
If set to true, amcl will start without you having to call the localization
start service.

#### `use_prob_model`
Switch between `likelihood_field_prob` and `likelihood_field` probabilistic models
for laser observations.

#### `topic_prefix`
Prefix to add to the node name (topic_prefix_amcl) and test_frame_id
(topic_prefix_base_footprint)

All other args feed directly into amcl params.  See ``laser_amcl`` docs for
definitions.

## ROS Node
``laser_amcl``