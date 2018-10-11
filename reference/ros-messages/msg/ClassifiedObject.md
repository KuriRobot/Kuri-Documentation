---
layout: reference
title: ClassifiedObject.msg
package: vision_msgs
category: message
tags: 
- ${tag}
- ${tag}
---

## Message Definition
```
# Header for timestamp info
Header header
string object_class     # Detected objects
float32 confidence    # Confidence for each detected object
sensor_msgs/RegionOfInterest roi  # Region within frame the object was detected
```

## Arguments
#### `header`
${description}

#### `object_class`
${description}

#### `confidence`
${description}

#### `roi`
${description}

## Related Documentation
``ClassifiedObjects.msg``  
