# FaxCore API Quick Reference

Source: [docs/openapi/faxcore.swagger.json](openapi/faxcore.swagger.json), copied from `https://123.faxcoreasia.com/docs/v1/faxcore` and filtered to exclude `/api/mfp/*` endpoints.

## User Section

### Message

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/message/send` | Send fax/email message. |
| `POST` | `/api/message/send/internal` | Send internal message. |
| `POST` | `/api/message/list` | List messages in a folder. |
| `POST` | `/api/message/details` | Get message details. |
| `POST` | `/api/message/status` | Get message status. |
| `POST` | `/api/message/download` | Download a message. |
| `GET` | `/api/message/image` | Retrieve a message page image. |
| `POST` | `/api/message/folders` | List user folders. |
| `POST` | `/api/message/read` | Mark message read/unread. |
| `POST` | `/api/message/move` | Move a message to another folder. |
| `POST` | `/api/message/cancel` | Cancel active transmission. |
| `POST` | `/api/message/retry` | Retry a failed message. |

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

MFP endpoints are intentionally excluded because they are meant for direct integration, not public consumption.

## Administration Section

### User

| Method | Path | Purpose |
| --- | --- | --- |
| `POST` | `/api/user/create` | Create a user. |
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
