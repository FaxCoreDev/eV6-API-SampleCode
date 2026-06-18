# Generated Endpoint Guide

Use this guide when an endpoint is listed in [API_REFERENCE.md](API_REFERENCE.md) but does not have a workflow sample in [SAMPLE_INDEX.md](SAMPLE_INDEX.md).

## Workflow vs Generated Samples

Workflow samples are hand-written examples for common tasks. They include practical setup, environment variables, guardrails for destructive actions, and multi-step flows such as upload-then-send.

Generated endpoint samples are Swagger-derived examples for broad endpoint coverage. They are useful when you need an endpoint that is not covered by a workflow sample.

## How to Run a Generated Endpoint Sample

1. Find the endpoint in [API_REFERENCE.md](API_REFERENCE.md).
2. Find its generated sample name and files in [ENDPOINT_COVERAGE.md](ENDPOINT_COVERAGE.md).
3. Review the generated payload before running it.
4. Replace placeholder values such as `sample-value`, `sample.user`, `sample-message-id`, and `1`.
5. Include all request model properties in the payload, even when Swagger marks them as optional.
6. Set `FAXCORE_CONFIRM_DESTRUCTIVE=true` before running any sample that creates, updates, deletes, moves, retries, cancels, assigns, approves, or changes state.

.NET generated samples run through the console app:

```powershell
src\dotnet\FaxCore.ApiSamples\bin\Debug\net48\FaxCore.ApiSamples.exe endpoint.post-pub-api-create-domain
```

JavaScript generated samples live under:

```text
src/javascript/endpoints/
```

curl generated samples live under:

```text
src/curl/endpoints/
```

## Payload Rules

- Send JSON requests with `Content-Type: application/json`.
- Send `/api/upload` as `multipart/form-data`; let the client generate the boundary.
- Include optional properties in JSON payloads. FaxCore may validate them even when Swagger does not mark them required.
- Prefer neutral values when a property is optional and can affect behavior, for example `agents: []`.
- Use arrays where the schema says `type: array`, even if a generated placeholder shows a single object.
- Do not run generated destructive samples against production data without reviewing the payload.

## Common Parameter Options

| Parameter | Confirmed guidance |
| --- | --- |
| Date/time strings | Use `yyyyMMdd`, `yyyyMMdd.HH:ss`, or `yyyyMMdd.HH:mm:ss`. |
| `pagination.page` | Page number. Default is `1`. Optional. |
| `pagination.maxResult` | Maximum returned result count. Use `0` for no limit. Optional. Workflow samples default to `25`; generated samples often use `1`. |
| `pagination.search` | String. Use an empty string when no search filter is needed. |
| `/api/message/list.folderName` | User folder: `inbox`, `outbox`, `sent`, `cancelled`, `approval`, or `hold`. |
| `/api/message/list.startDate` | String. Use `yyyyMMdd`, `yyyyMMdd.HH:ss`, or `yyyyMMdd.HH:mm:ss`. |
| `/api/message/list.endDate` | String. Use `yyyyMMdd`, `yyyyMMdd.HH:ss`, or `yyyyMMdd.HH:mm:ss`. |
| `/api/message/list.isRead` | Read filter: `yes`, `no`, or `all`. Workflow samples use `all`. |
| `/api/message/list.isDownloaded` | Downloaded filter: `yes`, `no`, or `all`. Workflow samples use `all`. |
| `/api/message/list.sortDescending` | Boolean. Sort by date. `true` = descending. Optional. |
| `message.priority` | `70` = high, `60` = normal, `50` = low, `10` = lowest. Workflow samples use `60`. |
| `message.mss` | Boolean. |
| `message.msf` | Boolean. |
| `message.agents[].id` | Agent ID from the Admin panel. Workflow samples include an agent only when `FAXCORE_AGENT_ID`, `FAXCORE_AGENT_TYPE`, and `FAXCORE_AGENT_VALUE` are all set. |
| `message.agents[].type` | `1` = port, `2` = port group. |
| `message.agents[].value` | Port number or port group ID from the Admin panel. |
| `visibility` | `Private` or `Public`. |
| `preferAddressType` | `Email` or `Fax`. |
| `addrType` | `Email` or `Fax`. |
| Upload document item | Set `name` to upload response `data[0].id`, `path` to `data[0].fileName`, and `isMerge` to `false`. |
| Cover page document item | Set `name` to the cover page name, `path` to an empty string, and `isMerge` to `true`. |
| Upload form part name | Default to an empty multipart part name: `name=""`. Set `FAXCORE_UPLOAD_FIELD` only if your environment uses a named part. |
| Upload file MIME type | Infer from the file extension. For PDF, use `application/pdf`. |
