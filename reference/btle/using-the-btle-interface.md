---
layout: reference
title: The BTLE API
category: btle
tags: 
- bluetooth
- btle
---

# Bluetooth Low-Energy API

## Overview
The Kuri robot runs a server on the bluetooth low energy (BTLE) chip which allows simple communication with the 
robot.  The primary function of this server is to pass over WiFi credentials to get Kuri to connect to your wifi 
network.  This communication protocol is used from the iOS and Android apps as well to connect your Kuri to the network.

## UUID
Name | UUID
--- | ---
Service | `03b53f06-10a1-4fc5-9bbf-0a9f04eebac7`
fromBot Characteristic | `f82af163-5383-4883-b76f-bc30e1e28570`
toBot Characteristic | `a500ffda-9a26-4161-b5bf-47e3c54eab35`

## API
The communication is done with JSON messages in a simple request/response format an example of which is shown below.

#### Request
```
{
    "type": "request",
    "command": <string>,
    "params": { "param_key": "param_value", ... }
}
```

#### Response
```
{
    "type": "response",
    "command": <string>,
    "response": { "response_key": "response_value", ... }
}
```


### wifi_list
List WiFi networks within range of the Kuri.

#### Request
```
{
  "type": "request",
  "command": "wifi_list"
}
```

#### Response
```
{
  "type": "response",
  "command": "wifi_list",
  "response": {
    "networks": [
      {
        ssid: <string>,
        security_type: <string>,
        rssi: <number>
      },
      ...
    ]
  }
}
```

* `rssi` is an integer between 0 and 100.

* Possible security types: open, wep, wpa, wpa2


### wifi_connect
Initiate a connection to a specific WiFi network

#### Request
```
{
  "type": "request",
  "command": "wifi_connect",
  "params": {
    "ssid": <string>,
    "password": <string>
  },
  "encrypted": <true if password is encrypted, otherwise false>
}
```

#### Response
```
{
  "type": "response",
  "command": "wifi_connect",
  "response": {
    "ssid": <string>,
    "connection_status": <string: disconnected | connecting | connected | failed>,
    "reachability": <string: internet | local | unknown | none>,
    "ip_address": <string>,
    "hostname": <string>,
    "uuid": <string>,
    "failure_reason": {
      "code": <number>,
      "detail": <string>
    }
  }
}
```


### wifi_status
Returns the status of the wifi connection

#### Request
```
{
  "type": "request",
  "command": "wifi_status",
}
```

#### Response
```
{
  "type": "response",
  "command": "wifi_status",
  "response": {
    "ssid": <string>,
    "connection_status": <string: disconnected | connecting | connected | failed>,
    "reachability": <string: internet | local | unknown | none>,
    "ip_address": <string>,
    "hostname": <string>,
    "uuid": <string>,
    "failure_reason": {
      "code": <number>,
      "detail": <string>
    }
  }
}
```


#### Examples
Sample response if the robot is connected to wifi:
```
{
  "type": "response",
  "command": "wifi_status",
  "response": {
    "ssid": "mayrobo-dev",
    "connection_status": "connected",
    "reachability": "internet",
    "ip_address": "192.168.123.101"
    "hostname": "kuri-0000123"
    "uuid": ed86dx23-cand-45c9-a7d3-4ea678513ub1
  }
}
```

Sample response if the robot is currently in the process of connecting to wifi:
```
{
  "type": "response",
  "command": "wifi_status",
  "response": {
    "connection_status": "connecting",
  }
}
```

Sample response if failed to connect to wifi after a successful wifi_connect command in the same session:
```
{
  "type": "response",
  "command": "wifi_status",
  "response": {
    "connection_status": "failed",
    "failure_reason": {
      "code": 10,
      "detail": "Password incorrect"
    }
  }
}
```


### Wifi Return Values
Below are possible values which are returned in fields from the wifi API calls.

#### Failure Reason Codes

Value | Description
---: | ---
`10` | Password incorrect
`11` | Timed out while connecting to access point
`12` | The signed signature did not match
`13` | Encryption not supported
`14` | Connman connection error, the text of the failure will be one of: "out-of-range", "pin-missing", "dhcp-failed" or "connect-failed"
`15` | User authentication signature failure
`16` | Required signature is missing
`100` | Base for system failures. Enumerated to help figure where the code failed.


#### Reachability Values

Value | Description
--- | ---
`internet` | A successful connection can be established to our servers or google.com
`local` | Local network is reachable, but no access to our servers or google.com
`unknown` | A transient state where even the local network is not reachable yet (e.g. because the DHCP server is not available)
`none` | The value corresponding to the 'disconnected' and 'failed' connection statuses


#### Connection Status Values

Value | Description
--- | ---
`disconnected` | When a robot is not connected to wifi
`connecting` | Working on connecting to a wifi network
`connected` | Fully connected to the wifi network
`failed` | Robot tried and failed to connect to a wifi network


### get_version
Returns the version numbers of the robot

#### Request
```
{
  "type":"request",
  "command":"get_version"
}
```

#### Response
```
{
  "type": "response",
  "command": "get_version",
  "response": {
    "sw_version": <string>,
    "ota_config_id": <number>,
    "hw_version": "not implement",
    "hw_type": <string>,
    "capabilities": {
      "bleWifiAndRegistrationEncryption": <boolean>
      "thirdPartyCloudTerms": True
    }
}
```
