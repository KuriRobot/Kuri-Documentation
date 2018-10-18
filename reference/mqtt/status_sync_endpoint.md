# Status Synchonization Endpoint
This endpoint is used to synchronize all of the robot status domains to the app on demand.  See the (Status Endpoint)[status_endpoint.md]
documentation for a full description of the various statuses and status domains.  Unlike the status endpoint, the status_sync endpoint
can be polled by the app, and will transmit the entire robot status on demand - not just individual status domains as they change

## Status Synchronization Endpoint Definition
Both the app and the robot transmit on this endpoint.  The app sends a message to the robot with message type "action" to request
a status update.

The robot will respond to an "action" message on this topic by transmitting back the status of every status domain.  The action_id of
the response will match the action_id of the request

### Endpoint Name
```
"status_sync"
```

### Payload Definition
The app->robot payload is used to request a status update from the robot.  The payload for this message is empty

The robot-> app payload is used to communicate the full status of the robot.  The payload for this message is a dictionary.
Each key in the dictionary will be the name of a status domain.  The value for each key is a tuple of <current status>, <data>
where <data> is the optional domain-specific data.  Many status domains will contain no extra data

Example Payload:
```
{
    "BEHAVIOR": {
        "status": "IS_READY",
        "domain": "BEHAVIOR",
        "data": null
    },
    "MEDIA": {
        "status": "PLAYING", 
        "domain": "MEDIA", 
        "data": "http://www.example.com"
    }, 
    "TOUR": {
        "status": "TOUR_COMPLETED", 
        "domain": "TOUR", 
        "data": null
    }, 
    "POWER": {
        "status": "DOCKED", 
        "domain": "POWER", 
        "data": null
    },
    . . .
}
```

The CONNECTED status domain is never part of the status_sync payload.

The POWER, TOUR, and DOCK_SENSOR domains will not be present in the status_sync payload following software startup until those domains have been updated on the robot.
Effectively, this means the POWER and DOCK_SENSOR domains may not be present in the sync_status payload for a short time following power-on
