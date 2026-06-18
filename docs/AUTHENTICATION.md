# Authentication and Configuration

FaxCore public REST API samples use OAuth client credentials.

Request an access token:

```http
POST /oauth/token HTTP/1.1
Host: your-faxcore-server.example.com
Content-Type: application/x-www-form-urlencoded

client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=client_credentials
```

How to get client credentials: https://faxcore.zohodesk.com/portal/en/kb/articles/how

Use the returned token in the HTTP `Authorization` header for each API request:

```http
Authorization: Bearer YOUR_ACCESS_TOKEN
```

## Environment Variables

```bash
export FAXCORE_BASE_URL="https://your-faxcore-server.example.com"
export FAXCORE_CLIENT_ID="your-client-id"
export FAXCORE_CLIENT_SECRET="your-client-secret"
```

PowerShell:

```powershell
$env:FAXCORE_BASE_URL = "https://your-faxcore-server.example.com"
$env:FAXCORE_CLIENT_ID = "your-client-id"
$env:FAXCORE_CLIENT_SECRET = "your-client-secret"
```

If you already have a valid token, set `FAXCORE_ACCESS_TOKEN` and the samples will skip the token request.

## Request Format

API requests send:

```text
Authorization: Bearer YOUR_ACCESS_TOKEN
Accept: application/json
Content-Type: application/json
```

## Safety Notes

- Do not commit client credentials, access tokens, or real customer data.
- Prefer test users, test domains, and non-production fax numbers when learning the API.
- Administrative calls are subject to FaxCore role and domain segregation.
- State-changing or destructive samples require `FAXCORE_CONFIRM_DESTRUCTIVE=true`.
