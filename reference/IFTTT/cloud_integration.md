# Cloud Integration for IFTTT

## Requirements
Cloud has to act as a proxy for IFTTT to the robot. Cloud will interpret IFTTT actions and send MQTT messages to a robot specific command to perform the action. It will also store IFTTT trigger events sent by the robot to send to IFTTT.

## New Database Tables

New table: **iftttAuthorizations**

| id | userId | code | createdAt | updatedAt |
|----|--------|------|-----------|-----------|
|    |        |      |           |           |
- **userId**: foreign key to the **id** column of the `users` table
- **code**: VARCHAR(255)

New table: **iftttSessions**

| id | authorizationId | secret | signature | createdAt | updatedAt |
|----|-----------------|--------|-----------|-----------|-----------|
|    |                 |        |           |           |           |
- **authorizationId**: foreign key to the **id** column of the `iftttAuthorizations` table
- **secret**: VARCHAR(255)
- **signature**: VARCHAR(255)

New table: **iftttTriggers**

| id | createdAt | updatedAt | triggerIdentity | userId | deletedAt |
|----|-----------|-----------|-----------------|--------|-----------|
|    |           |           |                 |        |           |
- **triggerIdentity**: VARCHAR(255)
- **userId**: foreign key to the **id** column of the `users` table
- **deletedAt**: DATETIME

New table: **iftttTriggerFields**

| id | createdAt | updatedAt | triggerId | triggerField | triggerFieldValue | deletedAt |
|----|-----------|-----------|-----------|--------------|-------------------|----------|
|    |           |           |           |              |                   |              |
- **triggerId**: foreign key to the **id** column of the `iftttTriggers` table
- **triggerField**: VARCHAR(255)
- **triggerFieldValue**: TEXT
- **deletedAt**: DATETIME

New table: **iftttTriggerEvents**

| id | uuid | createdAt | updatedAt | triggerId | robotTimestamp |
|----|------|-----------|-----------|-----------|----------------|
|    |      |           |           |           |                |
- **triggerId**: foreign key to the **id** column of the `iftttTriggers` table
- **robotTimestamp**: DOUBLE

## New Endpoints

The base prefix to be registered for the IFTTT Service will be `{base_url}/third-party` where `base_url` is the base URL of the Cloud endpoints. IFTTT adds a `/ifttt/v1` prefix to most endpoints, and to keep it consistent all ifttt endpoints will have the same prefix.

### Status ([IFTTT Status Documentation](https://platform.ifttt.com/docs/api_reference#service-status))
- Add endpoint to `GET /third-party/ifttt/v1/status`. This is called from IFTTT to check the status of the Kuri service' availability.
    - Respond with status code 200

### Authentication ([IFTTT Authentication Documentation](https://platform.ifttt.com/docs/api_reference#authentication-flow))
- Add endpoint to `POST /third-party/ifttt/v1/authorizations`. This is called from the Kuri specific IFTTT login page to request a code for a user. This code is then used to get an access token.
    - Headers: `Authorization: Bearer {token}` where token is the token returned from `POST /users/session`
    - Body: `{ "clientId": String }`
    - Response:
        - Validates token and client_id, if invalid returns a `401` status code
        - Creates an entry in `iftttAuthorizations` table and generates a random string for `code`
        - Respond with status code `201` and payload:
            ```
            {
                "data": [
                    {
                        "code": String
                    }
                ]
            }
            ```
- Add endpoint to `POST /third-party/ifttt/v1/tokens`. This is called by IFTTT once it receives the authorization code from the above endpoint to get an access token.
    - IFTTT sends the request in `application/x-www-form-urlencoded` format
    - Body:
        ```
        grant_type=authorization_code
        code=<CODE>
        client_id=<CLIENT_ID>
        client_secret=<CLIENT_SECRET>
        redirect_uri=<REDIRECT_URI>
        ```
        - `code` is the code generated from the authorizations endpoint above
        - `client_id` is the client ID registered with the Kuri service on IFTTT
    - Response:
        - Validates `code` against the `iftttAuthorizations` table. If `code` does not exist, respond with `401` status code.
        - Generate `access_token` by using a `secret` value (random string) to sign a JWT with the following payload:
            ```
            {
                "robotUUID": <robotUUID>
            }
            ```
        - If entry with `code` already exists in `iftttSessions` table, update the `secret` and `signature` (of the jwt token in the above step) of the entry (in effect invalidating the previous access token) with a newly generated secret. Otherwise create a new entry in the `iftttSessions` table.
            - Future work: if refresh token and access token expiration is implemented, the payload can include an `expiresAt` property in the payload.
        - Respond with status code `200` and payload:
            ```
            {
                "token": "Bearer",
                "access_token": String
            }
            ```
- Add endpoint to `DELETE /third-party/ifttt/v1/tokens
    - Headers: `Authorization: Bearer {token}` where token is the token returned from `POST /users/session`
    - Response:
        - Remove all entries from `iftttSessions` table and `iftttAuthorizations` table for the user
        - Respond with status code `200`

Note all endpoints below will require the `access_token` returned in the authentication endpoint and will authenticate it by checking that it exists in the `iftttSessions` table. A response with status code `401` is returned if `access_token` is invalid. A token is valid if an `iftttSessions` entry exists for the signature of the token, then verify that token matches the secret stored in the `iftttSessions`.

### User Info
- Add endpoint to `GET /third-party/ifttt/v1/user/info`. This is called by IFTTT to display the authorized user's information that is authorized user information, and also to periodically poll to see if access token is still valid.
    - Headers: `Authorization: Bearer {access_token}`
    - Response:
        - Verify that `access_token` is valid from the `iftttSessions` table. If not respond with `401` status code.
        - Respond with status code `200` and payload:
            ```
            {
                "data": {
                    "name": <FULL_NAME>,
                    "id": <EMAIL>
                }
            }
            ```
- Add endpoint to `GET /third-party/info`. This is called from the app to retrieve information about third party integrations.
    - For IFTTT the only information that will be returned will be a boolean indicating if a user is connected to IFTTT.
    - Headers: `Authorization: Bearer {token}` where `token` is the token from the log in (`POST /users/sessions`) or refresh token endpoints (`users/sessions{sessionUUID}/refresh`)
    - Respond with status code `200` and payload:
        ```
        {
            "data": [
                {
                    "name": "IFTTT",
                    "isConnected": Boolean
                }
            ]
        }
        ```
        - `isConnected` is true if user has an entry in the `iftttSessions` table


### Actions ([IFTTT Actions Documentation](https://platform.ifttt.com/docs/api_reference#actions))
- Add endpoint to `POST /third-party/ifttt/v1/actions/move/fields/place/options` to retrieve waypoint names that robot can move to. This endpoint will be registered with the `move` action in IFTTT for the `place` field.
  - Headers: `Authorization: Bearer {access_token}`
  - Response:
    - Retrieve list of waypoint names of the places that robot is mapped to
    - Respond with status code `200` and payload:
        ```
        {
            "data": [
                {
                    "label": <WAYPOINT_NAME_1>,
                    "value": <WAYPOINT_NAME_1>
                },
                {
                    "label": <WAYPOINT_NAME_2>,
                    "value": <WAYPOINT_NAME_2>
                }
            ]
        }
        ```
- Add endpoint to `POST /third-party/ifttt/v1/actions/animation/fields/action/options` and `POST /third-party/ifttt/v1/actions/move/fields/action/options` to retrieve animation action that robot can perform as listed in [Triggers and Actions section](./triggers_and_actions.md). There are two endpoints because IFTTT defines what the action field endpoint is given the action name and the field name. These endpoints will be registered with the `move` and `animation` action in IFTTT for the `action` field.
  - Headers: `Authorization: Bearer {access_token}`
  - Respond with status code `200` and payload:
    ```
    {
        "data": [
            {
                "label": <ANIMATION_NAME_1>,
                "value": <ANIMATION_ACTION_ID_1>
            },
            {
                "label": <ANIMATION_NAME_2>,
                "value": <ANIMATION_ACTION_ID_2>
            }
        ]
    }
    ```
- Add endpoint to `POST /third-party/ifttt/v1/actions/move`. The endpoint will be registered as the endpoint for the `move` action in IFTTT.
  - Headers: `Authorization: Bearer {access_token}`
  - Body:
    ```
    {
        "actionFields": {
            "place": <WAYPOINT_NAME>,
            "action": <ANIMATION_ACTION_ID>
        }
    }
    ```
  - Response:
    - Verify that `WAYPOINT_NAME` is a valid waypoint name of a place that robot is mapped to, and that `ANIMATION_ACTION_ID` is a valid animation action id. If not respond with status code `400` and following payload to notify IFTTT to skip this action in the future:
        ```
        {
            "errors": [
                {
                    "status": "SKIP",
                    "message": String
                }
            ]
        }
        ```
    - Send MQTT message to robot to trigger moving to waypoint and optionally performing an animation
      - Topic: `kuri/{environment}/command/{robot-uuid}`
      - Payload:
        ```
        {
            "name": "ifttt_move_command",
            "params": {
                "waypoint_uuid": <WAYPOINT_UUID>,
                "action_id": <ANIMATION_ACTION_ID>
            }
        }
        ```
        - **WAYPOINT_UUID**: A lookup will be needed to get the waypoint uuid from place corresponding to the request `WAYPOINT_NAME`
        - **action_id**: This property will be omitted if an `action` value is not specified in the request
    - Respond with status code `200` and payload: 
        ```
        {
            "data": [
                {
                    "id": String
                }
            ]
        }
        ```
        - `id` is the action_id of the MQTT message that was sent to robot
- Add endpoint to `POST /third-party/ifttt/v1/actions/animation`. The endpoint will be registered as the endpoint for the `animation` action in IFTTT.
  - Headers: `Authorization: Bearer {access_token}`
  - Body:
    ```
    {
        "actionFields": {
            "action": <ANIMATION_ACTION_ID>
        }
    }
    ```
  - Response:
    - Verify that `ANIMATION_ACTION_ID` is a valid animation action id. If not respond with status code `400` and following payload to notify IFTTT to skip this action in the future:
        ```
        {
            "errors": [
                {
                    "status": "SKIP",
                    "message": String
                }
            ]
        }
        ```
    - Send MQTT message to robot to trigger performing an animation
      - Topic: `kuri/{environment}/command/{robot-uuid}`
      - Payload:
        ```
        {
            "name": "ifttt_animation_command",
            "params": {
                "action_id": <ANIMATION_ACTION_ID>
            }
        }
        ```
    - Respond with a `200` status code and payload: 
        ```
        {
            "data": [
                {
                    "id": String
                }
            ]
        }
        ```
        - `id` is the action_id of the MQTT message that was sent to robot

### Triggers ([IFTTT Triggers Documentation](https://platform.ifttt.com/docs/api_reference#triggers))
- Add endpoint to `POST /third-party/ifttt/v1/triggers/voice_command` to retrieve triggers that match the `trigger_identity`. This endpoint will be registered as the endpoint for the `voice_command` trigger in IFTTT.
  - Headers: `Authorization: Bearer {access_token}`
  - Body:
    ```
    {
        "trigger_identity": String,
        "triggerFields": {
            "voice_command": <VOICE_COMMAND>
        },
        "ifttt_source": {
            "id": String,
            "url": String
        }
        "limit": Integer
    }
    ```
    - `limit`: default to 50 if it's not explicitly defined in the payload
  - Response:
    - Create entry in `iftttTriggers` table for `trigger_identity` if it does not already exists
    - Create entry in `iftttTriggerFields` table for any trigger fields if it does not already exists for the `trigger_identity`, with `triggerField`="voice_command" and `triggerFieldValue` = <VOICE_COMMAND>
    - If there is any change to voice commands for the `trigger_identity` notify robot by sending a message to the robot parameters SQS queue. See `Robot Parameters` section for more details.
    - Retrieve the events of triggers from `iftttTriggerEvents` that matches `trigger_identity` ordered by descending timestamp up to `limit` events
        - Respond with status code `200` and the following payload:
            ```
            {
                "data": [
                    {
                        "voice_command": String,
                        "meta": {
                            "id": String,
                            "timestamp": Long
                        }
                    }
                ]
            }
            ```
            - **id**: unique identifier for the trigger (can be the uuid in the `iftttTriggerEvents` table)
            - **timestamp**: Unix timestamp (`robotTimestamp`) of the `iftttTriggerEvents` table)
- Add endpoint to `DELETE /third-party-ifttt/v1/triggers/voice_command/trigger_identity/{trigger_identity}`
  - Headers: `Authorization: Bearer {access_token}`
  - Set `deletedAt` for entries with `trigger_identity` from the `iftttTriggerFields`, `iftttSources` and `iftttTriggers` table
  - Notify robot by sending a message to the robot parameters SQS queue that the list of voice commands have changed. See `Robot Parameters` section for more details.

## New Lambda
- Add a new lambda that is triggered by MQTT message to the topic `kuri/{environment}/ifttt_trigger/{robot-uuid}` and `message_origin` is `robot`
  - Creates an entry in the `iftttTriggerEvents` table with `trigger_identity` and `message_timestamp` AS `robotTimestamp`
  - Send request to `POST https://realtime.ifttt.com/v1/notifications` with the following payload:
    ```
    {
        "data": [
            {
                "user_id": <USER_ID>
            },
            {
                "trigger_identity": <TRIGGER_IDENTITY>
            }
        ]
    }
    ```
    - **user_id**: `id` of user that is associated with the robot

## Robot Parameters Integration
- IFTTT triggers will be communicated to robots using the robot parameters infrastructure.
- Information for the IFTTT triggers (voice commands) are already stored in various database table, so the values for the `ifttt_trigger_voice_commands` will not be stored in the `robotParameters` table.
- The consume parameter message lambda handler will have to be updated to read from the `iftttTriggers` and `iftttTriggerFields` table to write the parameter value for `ifttt_trigger_voice_commands`.

## New Website
- Add website hosted at `https://heykuri.net/oauth2/authorize` that follows the workflow in the [Authentication section](./authentication.md).
