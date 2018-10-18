# IFTTT Authentication

## Workflow

IFTTT authentication workflow is documented at https://platform.ifttt.com/docs/api_reference#authentication-flow
1. IFTTT directs user to the authorization URL `https://heykuri.net/third-party/ifttt/authorize?client_id={client_id}&redirect_uri={redirect_uri}&state={state}`
    - URL leads to a website that prompts user for email, password
        - On successful log in (including two factor authentication if user has set it up) prompts user if he/she wants to grant access to IFTTT
            - Sends a request to `POST /third-party/ifttt/v1/authorizations` with the access token from the login request in the header
            - Redirects to `https://ifttt.com/channels/{service_id}/authorize` with the following parameters
                - **code**: Authorization code that cloud generates from the `POST /third-party/ifttt/v1/authorizations` request
                - **state**: State code that is passed into the authorization URL
        - On failure redirects to `https://ifttt.com/channels/{service_id}/authorize?error=acess_denied`
1. IFTTT sends a request to `POST /third-party/ifttt/v1/tokens`
   - Payload:
        ```
        {
            "grant_type": "authorization_code",
            "code": <CODE>,
            "client_id": <CLIENT_ID>,
            "client_secret": <CLIENT_SECRET>,
            "redirect_uri" <REDIRECT_URI>
        }
        ```
        - **code**: code that is sent from step 1
    - Response:
        - Verify that `code` is a valid code from the `iftttAuthorization` table and `client_id` and `client_secret` are valid. If not respond with a `401` status code
        - Generates a new access token and stores them in `iftttAccessTokens` table
            - Respond with payload:
                ```
                {
                    "token": "Bearer",
                    "access_token": <ACCESS_TOKEN>
                }
                ```
1. IFTTT sends the access token to any registered IFTTT endpoints (like triggers, actions), and Cloud authenticates the token with the `iftttAccessTokens` table.

### Future work
Introduce refresh token and make the access_token generated in the above workflow expire after a set amount of time. If an access token is expired, Cloud endpoints should respond with a `401` error indicating that a new token should be used.
- IFTTT will send a request to `POST /third-party/ifttt/v1/tokens`
    - Payload:
        ```
        {
            "grant_type": "refresh_token",
            "client_id": <CLIENT_ID>,
            "client_secret": <CLIENT_SECRET>,
            "refresh_token": <REFRESH_TOKEN>
        }
        ``` 
    - Cloud will validate that the `<REFRESH_TOKEN>` is valid and generates a new access torken