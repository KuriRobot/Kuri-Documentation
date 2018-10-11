---
layout: reference
title: HypothesisSet.msg
package: amcl
category: message
tags: 
- amcl
- localization
- particles
---

## Message Definition
```
Header header
geometry_msgs/PoseWithCovariance[] hypotheses
```

## Arguments
#### `header`
Contains the tf frame and timestamp for hypotheses

#### `hypotheses`
List of poses with associated covariances to use in initializing amcl's
particle filter

## Related Documentation
``/initialpose_cloud``   
