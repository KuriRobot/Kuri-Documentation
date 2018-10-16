---
layout: reference
title: Face.msg
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

# Unique identifier
string id

# Time that the image was captured
time capture_time

# Amount of time that the face has been tracked
duration timetrack

# Bounding box of the face in pixels [x_origin, y_origin, width, height]
float32[4] bb

# Center of the face (x, y, _) in the range ([0.0, 1.0], [0.0, 1.0])
geometry_msgs/Point center

# Percentage of the face compared to the image size in pixels 
# (in the range [0.0, 1.0])
float32 size

# Rotation of the face in degrees (difference in the angle of eyes compared 
# to a horizontal line)
float32 rotation              

#  Keypoints for eyes, nose, mouth
geometry_msgs/Point[5] keypoints

# Confidence value in the range [0.0, 1.0]
float32 confidence

#  Currently unused, for future compatibility
string name
```

## Arguments
#### `header`
${description}

#### `capture_time`
${description}

#### `timetrack`
${description}

#### `bb`
${description}

#### `center`
${description}

#### `size`
${description}

#### `rotation`
${description}

#### `keypoints`
${description}

#### `confidence`
${description}

#### `name`
${description}

## Related Documentation
``FaceArray.msg``  
