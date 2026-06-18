# Sample Index

This index lists workflow samples that are hand-written for common tasks. For generated coverage of every public endpoint, see [ENDPOINT_COVERAGE.md](ENDPOINT_COVERAGE.md). For endpoints without a workflow sample, see [GENERATED_ENDPOINT_GUIDE.md](GENERATED_ENDPOINT_GUIDE.md).

State-changing or destructive samples require `FAXCORE_CONFIRM_DESTRUCTIVE=true`.

## Authentication

| Workflow | .NET command | JavaScript | curl |
| --- | --- | --- | --- |
| Request OAuth token | `auth.token` | `src/javascript/auth/request-token.mjs` | `src/curl/auth/request-token.sh` |

## User / Message

| Workflow | .NET command | JavaScript | curl |
| --- | --- | --- | --- |
| Upload file | `user.upload.file` | `src/javascript/user/upload/upload-file.mjs` | `src/curl/user/upload/upload-file.sh` |
| Send message | `user.message.send` | `src/javascript/user/message/send-message.mjs` | `src/curl/user/message/send-message.sh` |
| Delegate message | `user.message.delegate` | `src/javascript/user/message/delegate-message.mjs` | `src/curl/user/message/delegate-message.sh` |
| Forward message | `user.message.forward` | `src/javascript/user/message/forward-message.mjs` | `src/curl/user/message/forward-message.sh` |
| Delete message | `user.message.delete` | `src/javascript/user/message/delete-message.mjs` | `src/curl/user/message/delete-message.sh` |
| Delete trash message | `user.message.trash.delete` | `src/javascript/user/message/delete-trash-message.mjs` | `src/curl/user/message/delete-trash-message.sh` |
| List messages | `user.message.list` | `src/javascript/user/message/list-messages.mjs` | `src/curl/user/message/list-messages.sh` |
| Get status | `user.message.status` | `src/javascript/user/message/get-message-status.mjs` | `src/curl/user/message/get-message-status.sh` |
| Get read state | `user.message.read_state` | `src/javascript/user/message/get-read-state.mjs` | `src/curl/user/message/get-read-state.sh` |
| Get delete state | `user.message.delete_state` | `src/javascript/user/message/get-delete-state.mjs` | `src/curl/user/message/get-delete-state.sh` |
| Get image | `user.message.image` | `src/javascript/user/message/get-message-image.mjs` | `src/curl/user/message/get-message-image.sh` |
| Update subject | `user.message.subject.update` | `src/javascript/user/message/update-message-subject.mjs` | `src/curl/user/message/update-message-subject.sh` |
| Get tracking records | `user.message.tracking.get` | `src/javascript/user/message/get-tracking-records.mjs` | `src/curl/user/message/get-tracking-records.sh` |
| Update tracking record | `user.message.tracking.update` | `src/javascript/user/message/update-tracking-record.mjs` | `src/curl/user/message/update-tracking-record.sh` |

## User / Contact

| Workflow | .NET command | JavaScript | curl |
| --- | --- | --- | --- |
| List address books | `user.addressbook.list` | `src/javascript/user/addressbook/list-address-books.mjs` | `src/curl/user/addressbook/list-address-books.sh` |
| Create address book | `user.addressbook.create` | `src/javascript/user/addressbook/create-address-book.mjs` | `src/curl/user/addressbook/create-address-book.sh` |
| Update address book | `user.addressbook.update` | `src/javascript/user/addressbook/update-address-book.mjs` | `src/curl/user/addressbook/update-address-book.sh` |
| Delete address book | `user.addressbook.delete` | `src/javascript/user/addressbook/delete-address-book.mjs` | `src/curl/user/addressbook/delete-address-book.sh` |
| List contacts | `user.contact.list` | `src/javascript/user/contact/list-contacts.mjs` | `src/curl/user/contact/list-contacts.sh` |
| Get contact | `user.contact.get` | `src/javascript/user/contact/get-contact.mjs` | `src/curl/user/contact/get-contact.sh` |
| Create contact | `user.contact.create` | `src/javascript/user/contact/create-contact.mjs` | `src/curl/user/contact/create-contact.sh` |
| Update contact | `user.contact.update` | `src/javascript/user/contact/update-contact.mjs` | `src/curl/user/contact/update-contact.sh` |
| Delete contact | `user.contact.delete` | `src/javascript/user/contact/delete-contact.mjs` | `src/curl/user/contact/delete-contact.sh` |

## Administration

| Workflow | .NET command | JavaScript | curl |
| --- | --- | --- | --- |
| List domains | `admin.domain.list` | `src/javascript/administration/domain/list-domains.mjs` | `src/curl/administration/domain/list-domains.sh` |
| Create domain | `admin.domain.create` | `src/javascript/administration/domain/create-domain.mjs` | `src/curl/administration/domain/create-domain.sh` |
| List users | `admin.user.list` | `src/javascript/administration/user/list-users.mjs` | `src/curl/administration/user/list-users.sh` |
| Update profile | `admin.user.profile.update` | `src/javascript/administration/user/update-profile.mjs` | `src/curl/administration/user/update-profile.sh` |
| Search routes | `admin.route.search` | `src/javascript/administration/route/search-routes.mjs` | `src/curl/administration/route/search-routes.sh` |
