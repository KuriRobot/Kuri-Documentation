---
layout: reference
title: lost_detector
category: node
tags: 
- lost detector
- amcl
- localization
---

## Description
The lost_detector node looks at the spread of particles from amcl and tries to
decide whether the robot might be confused or lost.  

The lost detector creates two features based on the amcl particle filter
spread.  The first is the standard deviation of the longest dimension
of the x-y covariance ellipse (where the longest dimension corresponds to
the largest eigenvector of the covariance matrix), and the second is the
standard deviation of the particles' theta values.  

Those two features are used each time amcl broadcasts its particle covariance,
to evaluate whether the robot currently looks "lost" or "normal" using a
Gaussian Naive Bayes (GNB) classifier.  If enough time steps recently have
looked "lost," then the lost_detector will declare the robot confused or
lost.  

In particular, ``/lost_detector/status`` outputs one of the following:  
"confused" (tier 1): we've seen at least ``lost_detector/queue_min``
detections and this reading was labeled lost by the GNB classifier  

"lost" (tier 2): the ratio of lost to normal readings in the last
``lost_detector/window_meta_tier2_lost`` readings is higher than
``lost_detector/ratio_thresh_detections_tier2_lost``  

"normal" (tier 0): neither confused nor lost  

Seeing ``lost_detector/window_meta_tier0_normal`` "normal" readings will
reset the lost detector entirely.  

## Dependencies
* amcl
* lots of other things brought in by ``gizmo``

## Subscribed Topics
#### `/lost_detector/reset`  
std_msgs::Empty  
Used to reset the lost detector (empty queue, set status to normal)

``/laser_amcl_pose``  
geometry_msgs::PoseWithCovarianceStamped  
Used to get the covariance matrix from amcl

## Published Topics
#### `/lost_detector/status`  
std_msgs/String  
Outputs "lost," "confused," or "normal" depending on the state of the
lost_detector

## Parameters
Parameters can be found in `gizmo/app/configs/lost_detector.yaml`.  
In namespace modified_prob_classifier (params for the GNB classifier):  
#### `modified_prob_classifier/tier0_normal_prior`  
double  
The prior on whether we are lost  
#### `modified_prob_classifier/prob_thresh`  
double  
Classify this single set of features as "lost" if the prob is > prob_thresh
that it belongs to the lost-gaussian  
#### `modified_prob_classifier/slice_mu`  
4-vector of doubles  
mu (mean) vector is: [xy-not-lost, theta-not-lost, xy-lost, theta-lost]  
units are meters, radians  
#### `modified_prob_classifier/slice_sigma`  
4-vector of doubles  
sigma vector is: [xy-std-not-lost, theta-std-not-lost, xy-std-lost,
theta-std-lost]  
units are meters, radians  

In namespace lost_detector:  
#### `lost_detector/window_meta_tier2_lost`  
int  
how many lost detections to track when deciding whether we're tier2 "lost"  
#### `lost_detector/window_meta_tier0_normal`  
int  
if we haven't looked lost this many times in a row, declare that we're no
longer lost (reset queue and set to detector to normal)  
#### `lost_detector/queue_min`  
int  
min length of detection queue before we will declare even tier1 "confused"  
#### `lost_detector/ratio_thresh_detections_tier2_lost`  
double  
if the ratio of lost detections in the queue is this high, we are tier2 "lost"  

## Launch File
``lost_detector pylaunch``  