# FaxCore eV6 REST API Sample Code

Sample code for the FaxCore REST API published at:

- API UI: https://123.faxcoreasia.com/help/api/index#/PubApi
- Local OpenAPI copy: [docs/openapi/faxcore.swagger.json](docs/openapi/faxcore.swagger.json)

The samples are organized for experienced developers who want direct examples and newer developers who need a predictable place to start.

## Repository Layout

```text
docs/
  API_REFERENCE.md          Quick endpoint map grouped by user/admin areas
  AUTHENTICATION.md         OAuth client credentials and bearer token setup
  openapi/                  Offline copy of the published Swagger document
src/
  dotnet/                   .NET Framework 4.8 console samples
  curl/                     curl command samples
  javascript/               Node.js JavaScript samples
```

## Sample Categories

The API documentation exposes the public surface as `PubApi`. This repository groups it into two learning paths:

- `user`: day-to-day user workflows such as messages, contacts, address books, documents, and uploads.
- `administration`: administrative workflows such as users, domains, inbound routing, printers, and domain-wide search/configuration.

## Configuration

All platforms use the same basic settings:

- `FAXCORE_BASE_URL`, default `https://123.faxcoreasia.com`
- `FAXCORE_CLIENT_ID`, required
- `FAXCORE_CLIENT_SECRET`, required
- `FAXCORE_ACCESS_TOKEN`, optional when you already have a valid bearer token

Optional sample values are provided per script or in `App.config`.

Never commit production client credentials or access tokens. Use environment variables, local config transforms, or a secret manager.

## Run: .NET Framework 4.8

Open [src/dotnet/FaxCore.ApiSamples.sln](src/dotnet/FaxCore.ApiSamples.sln) in Visual Studio 2019 or later, or build from a developer command prompt:

```powershell
msbuild src\dotnet\FaxCore.ApiSamples.sln /p:Configuration=Debug
```

Run a sample:

```powershell
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.list
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe admin.domain.list
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe auth.token
$env:FAXCORE_UPLOAD_FILE = "C:\Temp\sample.pdf"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.upload.file
```

## Run: JavaScript

Requires Node.js 18 or later.

```powershell
cd src\javascript
$env:FAXCORE_CLIENT_ID = "your-client-id"
$env:FAXCORE_CLIENT_SECRET = "your-client-secret"
node user/message/list-messages.mjs
node administration/domain/list-domains.mjs
node auth/request-token.mjs
$env:FAXCORE_UPLOAD_FILE = "C:\Temp\sample.pdf"
node user/upload/upload-file.mjs
```

## Run: curl

```bash
export FAXCORE_BASE_URL="https://123.faxcoreasia.com"
export FAXCORE_CLIENT_ID="your-client-id"
export FAXCORE_CLIENT_SECRET="your-client-secret"
bash src/curl/user/message/list-messages.sh
bash src/curl/administration/domain/list-domains.sh
bash src/curl/auth/request-token.sh
export FAXCORE_UPLOAD_FILE="/tmp/sample.pdf"
bash src/curl/user/upload/upload-file.sh
```

Windows PowerShell users can still run the scripts from Git Bash, WSL, or any shell with `curl`.

## Current Coverage

This starter set includes runnable patterns for:

- User message send/list/status
- User contact list
- User file upload
- OAuth token request
- Administration user list/search
- Administration domain list
- Administration route search

Use [docs/API_REFERENCE.md](docs/API_REFERENCE.md) to add more samples with the same structure.
