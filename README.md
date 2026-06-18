# FaxCore eV6 REST API Sample Code

Sample code for the FaxCore REST API published at:

- API UI: https://your-faxcore-server.example.com/help/api/index#/PubApi
- Local OpenAPI copy: [docs/openapi/faxcore.swagger.json](docs/openapi/faxcore.swagger.json)

The samples are organized for experienced developers who want direct examples and newer developers who need a predictable place to start.

## Disclaimer

This source code is provided as is and was accurate at the time of writing. The owner is not responsible for any issue that arises from using this source code.

## Repository Layout

```text
docs/
  API_REFERENCE.md          Quick endpoint map grouped by user/admin areas
  AUTHENTICATION.md         OAuth client credentials and bearer token setup
  SAMPLE_INDEX.md           Workflow sample index
  GENERATED_ENDPOINT_GUIDE.md Guide for endpoints without workflow samples
  ENDPOINT_COVERAGE.md      Generated sample coverage for every public endpoint
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

- `FAXCORE_BASE_URL`, default `https://your-faxcore-server.example.com`
- `FAXCORE_CLIENT_ID`, required
- `FAXCORE_CLIENT_SECRET`, required
- `FAXCORE_ACCESS_TOKEN`, optional when you already have a valid bearer token

Optional sample values are provided per script or in `App.config`.

Never commit production client credentials or access tokens. Use environment variables, local config transforms, or a secret manager.

The `send-message` samples upload `FAXCORE_UPLOAD_FILE` to `/api/upload` first, then pass the first upload result into `message.documents[]` as:

```json
{
  "name": "data[0].id",
  "path": "data[0].fileName",
  "isMerge": false
}
```

`/api/upload` must be sent as `multipart/form-data`. Let the client library generate the header boundary: use `curl --form`, JavaScript `FormData`, or .NET `MultipartFormDataContent`. The default upload form field name is empty to match FaxCore's expected `Content-Disposition: form-data; name=""; filename="doc.pdf"` format; set `FAXCORE_UPLOAD_FIELD` only when your environment uses a named field. The samples infer the file part MIME type from the extension, so a PDF is sent as `application/pdf`; set `FAXCORE_UPLOAD_CONTENT_TYPE` only when you need to override that value.

To include a cover page, set `FAXCORE_COVER_PAGE_NAME`. Cover pages are sent as:

```json
{
  "name": "cover page name",
  "path": "",
  "isMerge": true
}
```

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
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.send
$env:FAXCORE_CONFIRM_DESTRUCTIVE = "true"
$env:FAXCORE_DELEGATE_USERNAME = "delegate.user"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.delegate
$env:FAXCORE_MESSAGE_ID = "message-id"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.forward
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.read_state
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.delete_state
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.image
$env:FAXCORE_MESSAGE_SUBJECT = "Updated subject"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.subject.update
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.tracking.get
$env:FAXCORE_TRACK_ID = "1"
$env:FAXCORE_TRACK_VALUE = "updated-value"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.tracking.update
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.delete
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe user.message.trash.delete
$env:FAXCORE_PARENT_DOMAIN_ID = "1"
$env:FAXCORE_DOMAIN_NAME = "sample-domain"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe admin.domain.create
$env:FAXCORE_PROFILE_USER_ID = "sample.user"
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe admin.user.profile.update
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
node user/message/send-message.mjs
$env:FAXCORE_CONFIRM_DESTRUCTIVE = "true"
$env:FAXCORE_DELEGATE_USERNAME = "delegate.user"
node user/message/delegate-message.mjs
$env:FAXCORE_MESSAGE_ID = "message-id"
node user/message/forward-message.mjs
node user/message/get-read-state.mjs
node user/message/get-delete-state.mjs
node user/message/get-message-image.mjs
$env:FAXCORE_MESSAGE_SUBJECT = "Updated subject"
node user/message/update-message-subject.mjs
node user/message/get-tracking-records.mjs
$env:FAXCORE_TRACK_ID = "1"
$env:FAXCORE_TRACK_VALUE = "updated-value"
node user/message/update-tracking-record.mjs
node user/message/delete-message.mjs
node user/message/delete-trash-message.mjs
$env:FAXCORE_PARENT_DOMAIN_ID = "1"
$env:FAXCORE_DOMAIN_NAME = "sample-domain"
node administration/domain/create-domain.mjs
$env:FAXCORE_PROFILE_USER_ID = "sample.user"
node administration/user/update-profile.mjs
```

## Run: curl

```bash
export FAXCORE_BASE_URL="https://your-faxcore-server.example.com"
export FAXCORE_CLIENT_ID="your-client-id"
export FAXCORE_CLIENT_SECRET="your-client-secret"
bash src/curl/user/message/list-messages.sh
bash src/curl/administration/domain/list-domains.sh
bash src/curl/auth/request-token.sh
export FAXCORE_UPLOAD_FILE="/tmp/sample.pdf"
bash src/curl/user/upload/upload-file.sh
bash src/curl/user/message/send-message.sh
export FAXCORE_CONFIRM_DESTRUCTIVE="true"
export FAXCORE_DELEGATE_USERNAME="delegate.user"
bash src/curl/user/message/delegate-message.sh
export FAXCORE_MESSAGE_ID="message-id"
bash src/curl/user/message/forward-message.sh
bash src/curl/user/message/get-read-state.sh
bash src/curl/user/message/get-delete-state.sh
bash src/curl/user/message/get-message-image.sh
export FAXCORE_MESSAGE_SUBJECT="Updated subject"
bash src/curl/user/message/update-message-subject.sh
bash src/curl/user/message/get-tracking-records.sh
export FAXCORE_TRACK_ID="1"
export FAXCORE_TRACK_VALUE="updated-value"
bash src/curl/user/message/update-tracking-record.sh
bash src/curl/user/message/delete-message.sh
bash src/curl/user/message/delete-trash-message.sh
export FAXCORE_PARENT_DOMAIN_ID="1"
export FAXCORE_DOMAIN_NAME="sample-domain"
bash src/curl/administration/domain/create-domain.sh
export FAXCORE_PROFILE_USER_ID="sample.user"
bash src/curl/administration/user/update-profile.sh
```

Windows PowerShell users can still run the scripts from Git Bash, WSL, or any shell with `curl`.

## Current Coverage

This starter set includes runnable patterns for:

- User message send/delegate/forward/delete/list/status
- User message read/delete state, image, subject update
- User message tracking get/update
- User address book list/create/update/delete
- User contact list/get/create/update/delete
- User file upload
- OAuth token request
- Administration user list/search
- Administration domain list/create
- Administration route search

For workflow samples, see [docs/SAMPLE_INDEX.md](docs/SAMPLE_INDEX.md). For endpoints without a workflow sample, see [docs/GENERATED_ENDPOINT_GUIDE.md](docs/GENERATED_ENDPOINT_GUIDE.md). For full generated endpoint coverage across JavaScript, curl, and .NET, see [docs/ENDPOINT_COVERAGE.md](docs/ENDPOINT_COVERAGE.md). Use [docs/API_REFERENCE.md](docs/API_REFERENCE.md) as the grouped API map.
