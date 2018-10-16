---
layout: reference
title: Field.msg
package: audio_msgs
category: message
tags: 
- SEDiag
---

## Message Definition
```
string name
string type
uint32 length
string description
string mode
```

## Arguments
#### `name`
Name of SEDiag field

#### `type`
Primitive C type used to represent this field

#### `length`
Size of the data structure used to store the field value

#### `description`
Description of the field

#### `mode`
Supported interactions with the field: read, write or both

## Related Documentation
``ListFields.srv``
