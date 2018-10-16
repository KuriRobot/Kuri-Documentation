---
layout: reference
title: laser_amcl
package: amcl
category: node
namespace: /laser_amcl
tags: 
- amcl
- localization
- particle filter
---

## Description
Mayfield's fork of amcl is almost identical to the upstream
[ROS-indigo package](https://github.com/ros-planning/navigation/tree/indigo-devel/amcl)
but has a few custom changes that we made for Kuri.  See the [normal amcl
docs](http://wiki.ros.org/amcl) for the majority of the documentation for amcl.
Below, only the custom changes we made for Kuri are documented (topic names
are those used on Kuri).  

The major changes we made are as follows:  
* Initialize amcl with multiple hypotheses
* Leave behind particles to account for getting stuck
* Localization start and stop services
* Penalize particles that end up deep in unknown space
* Visualization topics for doing localization comparisons

## Subscribed Topics
#### `/initialpose_cloud`  
``HypothesisSet.msg``  
Used to seed the particle cloud with multiple hypotheses with covariances.  

``/initialpose``  
geometry_msgs/PoseWithCovarianceStamped  
Normal amcl particle cloud initialization (single Gaussian).  

``/scan``  
sensor_msgs/LaserScan  
The incoming laser scan.  

``/tf``  
tf/tfMessage
TF transforms.  

``/tf_static``  
tf2_msgs/TFMessage  
Static TF transforms.  

``/map``  
nav_msgs/OccupancyGrid  
The map to use.  

## Published Topics
#### `/amcl_adjusted_scans`  
visualization_msgs/Marker  
If ``draw_laser_points`` is true, laser scans transformed to the current
estimated pose will be published on this topic.  

#### `/laser_amcl_basic_pose`  
geometry_msgs/PoseStamped  
If ``publish_basic_pose`` is true, the estimated pose is broadcast on this
topic, for easy visualization in RViz.  

#### `/laser_amcl_pose`  
geometry_msgs/PoseWithCovarianceStamped    
amcl's normal pose topic.  

#### `/laser_particlecloud`  
geometry_msgs/PoseArray  
amcl's normal particle cloud topic.  If ``draw_weight_as_height`` is true,
the z-value will be proportional to the particle weight (max at 1 m).  

``/tf``  
If ``publish_test_frame`` is true, will send the current pose estimate
(test_frame_id to map transform) as a broadcasted TF transform.  

## Services
#### `/localization_start`  
std_srvs/Empty  
Used to start amcl (if ``auto_start`` is true, don't need to call this to
start it up)  

#### `/localization_stop`  
std_srvs/Empty
Used to pause amcl  

#### `/set_map`  
nav_msgs/SetMap  
Used to set the map used in amcl  

## Parameters
#### `auto_start`  
boolean, default false  
If set to true, amcl will start without you having to call the localization
start service.  

#### `stuck_prob`  
double, default 0.0  
Leave the first (current sample_count * stuck_prob) particles where they were
when the action model is applied, to cover the case where the robot is
actually stuck in place.  

#### `init_global`  
boolean, default false  
If true, uses the uniform pose generator to initialize the particle filter.

#### `draw_weight_as_height`  
booean, default false  
If true, the height of the poses in the geometry_msgs::PoseArray broadcast
on ``/laser_particlecloud`` (default topic particlecloud, on Kuri the laser_
part comes from the topic_prefix in amcl.launch) will have height (z-values)
set to be proportional to the particle weight (highest particle at 1 m).  

#### `use_cov_from_params`  
boolean, default false  
If true, uses the params ``std_xx``, ``std_yy``, and ``std_tt`` to initialize
the particle cloud (whenever a message is received on /initialpose).  

#### `use_tf_to_update_initial_pose`  
boolean, default true  
If false, does not attempt to integrate the odometric change that has happened
in-between an `/initialpose` time stamp and the current time.  (We have found
that leaving this true can occasionally result in very crazy behavior when
there is any weirdness with tf, via time jumping or running low on CPU or
any such thing.)  

#### `std_xx`  
double, default 0.25  
Only active if use_cov_from_params is true  
Variance in x to use in initializing the particle cloud.  
(the default value is 0.5 meters squared.)  

#### `std_yy`  
double, default 0.25  
Only active if use_cov_from_params is true  
Variance in y to use in initializing the particle cloud.  
(the default value is 0.5 meters squared.)  

#### `std_tt`  
double, default 0.121846  
Only active if use_cov_from_params is true  
Variance in theta to use in initializing the particle cloud.  
(the default value is 20 degrees squared.)  

Params for penalizing poses that are in unknown space:

#### `penalize_unknown`  
boolean, default false  
If set to true, penalizes particles if a certain percentage of
map pixels around them are unknown (unknown_threshold).
The weighting scheme is linear. So if 60%
of the pixels are unknown, we multiple the particle's existing weight by .4
(or 1-.6). This is to allow particles to somewhat travel through bits of the
map with specks/shards of unknown pixels without being penalized.

#### `unknown_radius`  
int, default 4  
Pixel radius of the square around the robot pose that gets checked for unknown
pixels (it checks from pose-square - unknown_radius to pose-square +
unknown_radius in both x and y).  (The default on Kuri uses 5 cm pixels,
so the window is 9 * 5 = 45 cm wide.)

#### `unknown_threshold`  
double, default 0.6  
The percentage of map pixels around a particle's robot pose that can be
unknown before a penalty is applied (if penalize_unknown is set to true).  

#### `unknown_min_penalty`  
double, default 0.2  
Minimum penalty to apply to a particle with more than unknown_threshold
percent of map pixels around them that are unknown.  

Params for using beam skipping with the likelihood_field_prob laser model:  
The likelihood_field_prob model
doesn't use the ad-hoc weighting scheme for combining beam probs that the
likelihood_field model does
(taking probabilities to the third power, which seems rather arbitrary,
but serves to keep around less-likely
hypotheses for much longer).  This mode converges much faster and generates
more accurate pose estimates when the world matches the map well, since it
makes full use of all laser readings to squash non-matching particles.
However, it is really only useful when you have a nice laser that generates
a wide field-of-view with quite accurate measurements.  This mode also needs
beam-skipping to avoid killing off correct particles due to dynamic
obstacles.

If you have a
less-accurate, lower-range, consumer-grade sensor in your robot (like
Kuri's very custom depth sensor), you probably want to use the
likelihood_field model, which is what we use by default on Kuri.  

This stuff got pushed into normal amcl, but is not in the normal amcl
documentation as of writing this.  

#### `do_beamskip`  
boolean, default false  
Only applies if laser_model_type is set to likelihood_field_prob.  If true,
ignore beams that do not agree with the map for many particles' poses,
to avoid down-weighting correct particles because of unexpected obstacles
such as humans.  

In particular, laser beams that are not within beam_skip_distance of at least
(particle count * beam_skip_threshold) particles will not be used
to update particle probabilities in the observation update (beam is skipped),
unless the number of skipped beams is greater than
(beam_skip_error_threshold_ * number of laser beams),
at which point we assume the filter may have
converged to the wrong solution and thus integrate all the beams after all.  

#### `beam_skip_distance`  
double, default 0.5  
Only active if do_beamskip is true and laser_model_type is
likelihood_field_prob.  
If the laser beam endpoint is not within beam_skip_distance of the closest
obstacle in the map, it is a candidate for beam skipping.  

#### `beam_skip_threshold`  
double, default 0.3  
Only active if do_beamskip is true and laser_model_type is
likelihood_field_prob.  
If a laser beam does not agree with more than (particle count *
beam_skip_threshold), it is added to the list of beams to skip.  

#### `beam_skip_error_threshold_`  
double, default 0.9  
(yes, the trailing underscore is actually part of the param name, whoops.)  
Only active if do_beamskip is true and laser_model_type is
likelihood_field_prob.  
If the number of skipped beams is greater than
(beam_skip_error_threshold_ * number of laser beams), we assume the filter
may have converged to the wrong solution and thus integrate all the beams
after all.  

Params for doing localization comparisons with multiple copies of amcl:  

#### `publish_basic_pose`  
boolean, default false  
If true, will publish the current amcl pose estimate as a
geometry_msgs::PoseStamped message on topic "/laser_amcl_basic_pose".
(The topic name here includes the prefix "laser", which is set in
``amcl.launch``.  The original topic name is "amcl_basic_pose".)  

#### `publish_basic_pose_on_convergence`  
boolean, default false  
If true, will only publish the current amcl pose estimate as a
geometry_msgs::PoseStamped message on topic "/laser_amcl_basic_pose"
when the particles are converged (all particles are within 0.5 m of
the mean).  

#### `draw_laser_points`  
boolean, default false  
Set this to true to draw the current laser scan, transformed to the current
amcl pose estimate (this can be used to visualize comparisons when running
multiple copies of amcl with different params).  The transformed laser
scan is broadcast as a visualization_msgs::Marker message on topic
``/amcl_adjusted_scans``.

#### `laser_colors`  
double[3], no default  
Only active if draw_laser_points is true  
If this is actually a 3-list, the values should be between 0 and 1,
and correspond to the (r, g, b) values for the color that should be used
to draw the laser scan.  

#### `publish_test_frame`  
boolean, default false  
If true, sends the current amcl pose estimate to the tf broadcaster
as a test_frame_id to map transform.  

#### `test_frame_id`  
string, default "test_map"  
Only active if publish_test_frame is true  
What to call the tf frame that gets sent to the tf broadcaster.  

#### `odom_only`  
boolean, default false  
If true, updates the estimated pose only using odometry estimates

## Launch File
``laser_amcl.launch``  
