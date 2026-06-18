# FaxCore API Quick Reference

Source: [docs/openapi/faxcore.swagger.json](openapi/faxcore.swagger.json), copied from `https://your-faxcore-server.example.com/docs/v1/faxcore` and filtered to exclude `/api/mfp/*` endpoints.

## User Section

### Message

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/message/send` | Send fax/email message. |
| `POST` | `/api/message/send/internal` | Send internal message. |
| `POST` | `/api/message/delegate` | Send message on behalf of another user. |
| `POST` | `/api/message/list` | List messages in a folder. |
| `POST` | `/api/message/details` | Get message details. |
| `POST` | `/api/message/status` | Get message status. |
| `POST` | `/api/message/tracking` | Get message tracking records. |
| `PUT` | `/api/message/tracking` | Update a message tracking record. |
| `POST` | `/api/message/download` | Download a message. |
| `GET` | `/api/message/image` | Retrieve a message page image. |
| `POST` | `/api/message/folders` | List user folders. |
| `POST` | `/api/message/read` | Mark message read/unread. |
| `POST` | `/api/message/read_state` | Get message read state. |
| `POST` | `/api/message/delete_state` | Get message delete state. |
| `POST` | `/api/message/move` | Move a message to another folder. |
| `POST` | `/api/message/forward` | Forward message to users. |
| `POST` | `/api/message/cancel` | Cancel active transmission. |
| `POST` | `/api/message/retry` | Retry a failed message. |
| `PUT` | `/api/message/subject` | Update message subject. |
| `DELETE` | `/api/message/delete` | Delete messages. |
| `DELETE` | `/api/message/delete/trash` | Permanently delete trash messages. |

`POST /api/message/list` requires non-empty `isRead` and `isDownloaded` filter values. The workflow samples default both to `all`; set `FAXCORE_IS_READ` or `FAXCORE_IS_DOWNLOADED` to narrow the filter.

Sample payloads intentionally include optional request properties from the Swagger models because FaxCore may validate them even when they are documented as optional. Where a property could change behavior and the valid values are not described, the workflow samples include a neutral value, such as `agents: []`.

For endpoints without a workflow sample, use the generated samples listed in [ENDPOINT_COVERAGE.md](ENDPOINT_COVERAGE.md) with the guidance in [GENERATED_ENDPOINT_GUIDE.md](GENERATED_ENDPOINT_GUIDE.md).

### Contact and Address Book

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/addressbook/list` | List personal address books. |
| `POST` | `/api/addressbook` | Create an address book. |
| `POST` | `/api/addressbook/update` | Update an address book. |
| `DELETE` | `/api/addressbook` | Delete an address book. |
| `POST` | `/api/contact/list` | List contacts in an address book. |
| `GET` | `/api/contact` | Get contact details. |
| `POST` | `/api/contact` | Create a contact. |
| `POST` | `/api/contact/update` | Update a contact. |
| `DELETE` | `/api/contact` | Delete a contact. |

### Document and Upload

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/upload` | Upload a file and receive encrypted file name. |
| `POST` | `/api/document/folder/list` | List document folders. |
| `POST` | `/api/document/list` | List documents. |
| `POST` | `/api/document` | Create a document. |
| `DELETE` | `/api/document` | Delete a document. |
| `GET` | `/api/document/coverpage` | List cover pages. |

`POST /api/upload` expects `multipart/form-data`, not JSON. Send the file as an unnamed form part to match FaxCore's expected `Content-Disposition: form-data; name=""; filename="doc.pdf"` format unless your tenant/API configuration uses a named field. Do not manually set only `Content-Type: multipart/form-data`; the request also needs a generated boundary. The samples use `curl --form`, JavaScript `FormData`, and .NET `MultipartFormDataContent` so the boundary is added automatically. The file part MIME type is inferred from the extension, so a PDF is sent as `application/pdf`; set `FAXCORE_UPLOAD_CONTENT_TYPE` only when you need to override that value.

Successful upload response:

```json
{
  "status": "Success",
  "data": [
    {
      "id": "683f4861aaf54",
      "fileName": "683f4861aaf54.pdf"
    }
  ],
  "message": ""
}
```

`message.documents[]` supports two document types:

- File upload: call `POST /api/upload`, then set `name` to `data[0].id`, `path` to `data[0].fileName`, and `isMerge` to `false`.
- Cover page: set `name` to the cover page name, `path` to an empty string, and `isMerge` to `true`.

MFP endpoints are intentionally excluded because they are meant for direct integration, not public consumption.

## Administration Section

### User

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/user/create` | Create a user. |
| `PUT` | `/api/update/profile` | Update a user profile using update profile request model. |
| `PUT` | `/api/user/profile` | Update a user profile. |
| `PUT` | `/api/user/config` | Update user configuration. |
| `DELETE` | `/api/user/delete` | Delete a user. |
| `POST` | `/api/user/move` | Move user to a domain. |
| `POST` | `/api/user/activate` | Activate user. |
| `POST` | `/api/user/deactivate` | Deactivate user. |
| `POST` | `/api/users/list` | List users in a domain. |
| `POST` | `/api/user/search` | Search users. |
| `POST` | `/api/user/details` | Get user details. |
| `POST` | `/api/user/faxsetting` | Get user fax settings. |

### Domain

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/domain` | List available domains. |
| `POST` | `/api/domain` | Create a domain. |

### Route

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/route/inbound` | Create inbound route. |
| `POST` | `/api/route/search` | Search inbound routes. |
| `POST` | `/api/route/enable` | Enable inbound route. |
| `POST` | `/api/route/disable` | Disable inbound route. |
| `POST` | `/api/route/delete` | Delete inbound route. |

### Printer and Search

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/api/printer` | List printers. |
| `POST` | `/api/printer` | Create printer. |
| `DELETE` | `/api/printer` | Delete printer. |
| `POST` | `/api/message/search` | Search messages within a domain. |
| `POST` | `/api/message/assign` | Assign inbound/outbound message. |
| `POST` | `/api/message/approval` | Approve or disapprove a message. |
