---
layout: reference
title: MqttStatus.srv
package: gizmo_msgs
category: service-message
tags: 
- ${tag}
- ${tag} 
---

## Message Definition
```
---
# MQTT Node will assemble topic names for you based on the device, environment
# robot_id, and the 'endpoint' which is specified when you publish the message
# More info at:
# https://github.com/mayfieldrobotics/kuri_project_management/tree/master/mqtt
string device
string environment
string robot_id

# In test environment, we let MQTT pick its own path for credentials so we
# don't interfere with other MQTT nodes
string alt_cred_path

bool connected
```

## Arguments
#### `device`
${description}

#### `environment`
${description}

#### `robot_id`
${description}

#### `alt_cred_path`
${description}

#### `connected`
${description}

## Related Documentation
``/mqtt/status``  
