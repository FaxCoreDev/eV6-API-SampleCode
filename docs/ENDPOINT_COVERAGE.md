# Endpoint Coverage

Generated from `docs/openapi/faxcore.swagger.json`, excluding `/api/mfp/*` endpoints.

Destructive or state-changing samples require `FAXCORE_CONFIRM_DESTRUCTIVE=true`.

For .NET, run generated samples with `FaxCore.ApiSamples.exe endpoint.<sample-name>`. Example: `FaxCore.ApiSamples.exe endpoint.post-pub-api-create-domain`.

For endpoints without a workflow sample, review [GENERATED_ENDPOINT_GUIDE.md](GENERATED_ENDPOINT_GUIDE.md) before running generated samples.

## Administration / Domain

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `GET` | `/api/domain` | `PubApi_ListDomain` | [get-pub-api-list-domain.mjs](../src/javascript/endpoints/administration/domain/get-pub-api-list-domain.mjs) | [get-pub-api-list-domain.sh](../src/curl/endpoints/administration/domain/get-pub-api-list-domain.sh) |
| `POST` | `/api/domain` | `PubApi_CreateDomain` | [post-pub-api-create-domain.mjs](../src/javascript/endpoints/administration/domain/post-pub-api-create-domain.mjs) | [post-pub-api-create-domain.sh](../src/curl/endpoints/administration/domain/post-pub-api-create-domain.sh) |

## Administration / Message

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `POST` | `/api/message/approval` | `PubApi_Approval` | [post-pub-api-approval.mjs](../src/javascript/endpoints/administration/message/post-pub-api-approval.mjs) | [post-pub-api-approval.sh](../src/curl/endpoints/administration/message/post-pub-api-approval.sh) |
| `POST` | `/api/message/assign` | `PubApi_Assign` | [post-pub-api-assign.mjs](../src/javascript/endpoints/administration/message/post-pub-api-assign.mjs) | [post-pub-api-assign.sh](../src/curl/endpoints/administration/message/post-pub-api-assign.sh) |
| `POST` | `/api/message/search` | `PubApi_SearchMessages` | [post-pub-api-search-messages.mjs](../src/javascript/endpoints/administration/message/post-pub-api-search-messages.mjs) | [post-pub-api-search-messages.sh](../src/curl/endpoints/administration/message/post-pub-api-search-messages.sh) |

## Administration / Printer

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `DELETE` | `/api/printer` | `PubApi_DeletePrinter` | [delete-pub-api-delete-printer.mjs](../src/javascript/endpoints/administration/printer/delete-pub-api-delete-printer.mjs) | [delete-pub-api-delete-printer.sh](../src/curl/endpoints/administration/printer/delete-pub-api-delete-printer.sh) |
| `GET` | `/api/printer` | `PubApi_ListPrinters` | [get-pub-api-list-printers.mjs](../src/javascript/endpoints/administration/printer/get-pub-api-list-printers.mjs) | [get-pub-api-list-printers.sh](../src/curl/endpoints/administration/printer/get-pub-api-list-printers.sh) |
| `POST` | `/api/printer` | `PubApi_CreatePrinter` | [post-pub-api-create-printer.mjs](../src/javascript/endpoints/administration/printer/post-pub-api-create-printer.mjs) | [post-pub-api-create-printer.sh](../src/curl/endpoints/administration/printer/post-pub-api-create-printer.sh) |

## Administration / Route

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `POST` | `/api/route/delete` | `PubApi_DeleteInboudRoute` | [post-pub-api-delete-inboud-route.mjs](../src/javascript/endpoints/administration/route/post-pub-api-delete-inboud-route.mjs) | [post-pub-api-delete-inboud-route.sh](../src/curl/endpoints/administration/route/post-pub-api-delete-inboud-route.sh) |
| `POST` | `/api/route/disable` | `PubApi_DisabledInboudRoute` | [post-pub-api-disabled-inboud-route.mjs](../src/javascript/endpoints/administration/route/post-pub-api-disabled-inboud-route.mjs) | [post-pub-api-disabled-inboud-route.sh](../src/curl/endpoints/administration/route/post-pub-api-disabled-inboud-route.sh) |
| `POST` | `/api/route/enable` | `PubApi_EnableInboudRoute` | [post-pub-api-enable-inboud-route.mjs](../src/javascript/endpoints/administration/route/post-pub-api-enable-inboud-route.mjs) | [post-pub-api-enable-inboud-route.sh](../src/curl/endpoints/administration/route/post-pub-api-enable-inboud-route.sh) |
| `POST` | `/api/route/inbound` | `PubApi_CreateInboundRoute` | [post-pub-api-create-inbound-route.mjs](../src/javascript/endpoints/administration/route/post-pub-api-create-inbound-route.mjs) | [post-pub-api-create-inbound-route.sh](../src/curl/endpoints/administration/route/post-pub-api-create-inbound-route.sh) |
| `POST` | `/api/route/search` | `PubApi_SearchInboundRoute` | [post-pub-api-search-inbound-route.mjs](../src/javascript/endpoints/administration/route/post-pub-api-search-inbound-route.mjs) | [post-pub-api-search-inbound-route.sh](../src/curl/endpoints/administration/route/post-pub-api-search-inbound-route.sh) |

## Administration / User

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `PUT` | `/api/update/profile` | `PubApi_UpdateProfile` | [put-pub-api-update-profile.mjs](../src/javascript/endpoints/administration/user/put-pub-api-update-profile.mjs) | [put-pub-api-update-profile.sh](../src/curl/endpoints/administration/user/put-pub-api-update-profile.sh) |
| `POST` | `/api/user/activate` | `PubApi_ActivateUser` | [post-pub-api-activate-user.mjs](../src/javascript/endpoints/administration/user/post-pub-api-activate-user.mjs) | [post-pub-api-activate-user.sh](../src/curl/endpoints/administration/user/post-pub-api-activate-user.sh) |
| `PUT` | `/api/user/config` | `PubApi_UpdateUserConfig` | [put-pub-api-update-user-config.mjs](../src/javascript/endpoints/administration/user/put-pub-api-update-user-config.mjs) | [put-pub-api-update-user-config.sh](../src/curl/endpoints/administration/user/put-pub-api-update-user-config.sh) |
| `POST` | `/api/user/create` | `PubApi_CreateUser` | [post-pub-api-create-user.mjs](../src/javascript/endpoints/administration/user/post-pub-api-create-user.mjs) | [post-pub-api-create-user.sh](../src/curl/endpoints/administration/user/post-pub-api-create-user.sh) |
| `POST` | `/api/user/deactivate` | `PubApi_DeactivateUser` | [post-pub-api-deactivate-user.mjs](../src/javascript/endpoints/administration/user/post-pub-api-deactivate-user.mjs) | [post-pub-api-deactivate-user.sh](../src/curl/endpoints/administration/user/post-pub-api-deactivate-user.sh) |
| `DELETE` | `/api/user/delete` | `PubApi_RemoveUser` | [delete-pub-api-remove-user.mjs](../src/javascript/endpoints/administration/user/delete-pub-api-remove-user.mjs) | [delete-pub-api-remove-user.sh](../src/curl/endpoints/administration/user/delete-pub-api-remove-user.sh) |
| `POST` | `/api/user/details` | `PubApi_GetUserDetailsByUserName` | [post-pub-api-get-user-details-by-user-name.mjs](../src/javascript/endpoints/administration/user/post-pub-api-get-user-details-by-user-name.mjs) | [post-pub-api-get-user-details-by-user-name.sh](../src/curl/endpoints/administration/user/post-pub-api-get-user-details-by-user-name.sh) |
| `POST` | `/api/user/faxsetting` | `PubApi_GetUserFaxSetting` | [post-pub-api-get-user-fax-setting.mjs](../src/javascript/endpoints/administration/user/post-pub-api-get-user-fax-setting.mjs) | [post-pub-api-get-user-fax-setting.sh](../src/curl/endpoints/administration/user/post-pub-api-get-user-fax-setting.sh) |
| `POST` | `/api/user/move` | `PubApi_MoveUser` | [post-pub-api-move-user.mjs](../src/javascript/endpoints/administration/user/post-pub-api-move-user.mjs) | [post-pub-api-move-user.sh](../src/curl/endpoints/administration/user/post-pub-api-move-user.sh) |
| `PUT` | `/api/user/profile` | `PubApi_UpdateUserProfile` | [put-pub-api-update-user-profile.mjs](../src/javascript/endpoints/administration/user/put-pub-api-update-user-profile.mjs) | [put-pub-api-update-user-profile.sh](../src/curl/endpoints/administration/user/put-pub-api-update-user-profile.sh) |
| `POST` | `/api/user/search` | `PubApi_SearchUsers` | [post-pub-api-search-users.mjs](../src/javascript/endpoints/administration/user/post-pub-api-search-users.mjs) | [post-pub-api-search-users.sh](../src/curl/endpoints/administration/user/post-pub-api-search-users.sh) |
| `POST` | `/api/users/list` | `PubApi_GetUserList` | [post-pub-api-get-user-list.mjs](../src/javascript/endpoints/administration/user/post-pub-api-get-user-list.mjs) | [post-pub-api-get-user-list.sh](../src/curl/endpoints/administration/user/post-pub-api-get-user-list.sh) |

## User / Addressbook

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `DELETE` | `/api/addressbook` | `PubApi_DeleteAddressBook` | [delete-pub-api-delete-address-book.mjs](../src/javascript/endpoints/user/addressbook/delete-pub-api-delete-address-book.mjs) | [delete-pub-api-delete-address-book.sh](../src/curl/endpoints/user/addressbook/delete-pub-api-delete-address-book.sh) |
| `POST` | `/api/addressbook` | `PubApi_CreateAddressBook` | [post-pub-api-create-address-book.mjs](../src/javascript/endpoints/user/addressbook/post-pub-api-create-address-book.mjs) | [post-pub-api-create-address-book.sh](../src/curl/endpoints/user/addressbook/post-pub-api-create-address-book.sh) |
| `POST` | `/api/addressbook/list` | `PubApi_ListUserAddressBook` | [post-pub-api-list-user-address-book.mjs](../src/javascript/endpoints/user/addressbook/post-pub-api-list-user-address-book.mjs) | [post-pub-api-list-user-address-book.sh](../src/curl/endpoints/user/addressbook/post-pub-api-list-user-address-book.sh) |
| `POST` | `/api/addressbook/update` | `PubApi_UpdateAddressBook` | [post-pub-api-update-address-book.mjs](../src/javascript/endpoints/user/addressbook/post-pub-api-update-address-book.mjs) | [post-pub-api-update-address-book.sh](../src/curl/endpoints/user/addressbook/post-pub-api-update-address-book.sh) |

## User / Contact

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `DELETE` | `/api/contact` | `PubApi_DeleteContact` | [delete-pub-api-delete-contact.mjs](../src/javascript/endpoints/user/contact/delete-pub-api-delete-contact.mjs) | [delete-pub-api-delete-contact.sh](../src/curl/endpoints/user/contact/delete-pub-api-delete-contact.sh) |
| `GET` | `/api/contact` | `PubApi_GetContact` | [get-pub-api-get-contact.mjs](../src/javascript/endpoints/user/contact/get-pub-api-get-contact.mjs) | [get-pub-api-get-contact.sh](../src/curl/endpoints/user/contact/get-pub-api-get-contact.sh) |
| `POST` | `/api/contact` | `PubApi_CreateContact` | [post-pub-api-create-contact.mjs](../src/javascript/endpoints/user/contact/post-pub-api-create-contact.mjs) | [post-pub-api-create-contact.sh](../src/curl/endpoints/user/contact/post-pub-api-create-contact.sh) |
| `POST` | `/api/contact/list` | `PubApi_ListUserContact` | [post-pub-api-list-user-contact.mjs](../src/javascript/endpoints/user/contact/post-pub-api-list-user-contact.mjs) | [post-pub-api-list-user-contact.sh](../src/curl/endpoints/user/contact/post-pub-api-list-user-contact.sh) |
| `POST` | `/api/contact/update` | `PubApi_UpdateContact` | [post-pub-api-update-contact.mjs](../src/javascript/endpoints/user/contact/post-pub-api-update-contact.mjs) | [post-pub-api-update-contact.sh](../src/curl/endpoints/user/contact/post-pub-api-update-contact.sh) |

## User / Document

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `DELETE` | `/api/document` | `PubApi_DeleteDocument` | [delete-pub-api-delete-document.mjs](../src/javascript/endpoints/user/document/delete-pub-api-delete-document.mjs) | [delete-pub-api-delete-document.sh](../src/curl/endpoints/user/document/delete-pub-api-delete-document.sh) |
| `POST` | `/api/document` | `PubApi_CreateDocument` | [post-pub-api-create-document.mjs](../src/javascript/endpoints/user/document/post-pub-api-create-document.mjs) | [post-pub-api-create-document.sh](../src/curl/endpoints/user/document/post-pub-api-create-document.sh) |
| `GET` | `/api/document/coverpage` | `PubApi_ListCoverPage` | [get-pub-api-list-cover-page.mjs](../src/javascript/endpoints/user/document/get-pub-api-list-cover-page.mjs) | [get-pub-api-list-cover-page.sh](../src/curl/endpoints/user/document/get-pub-api-list-cover-page.sh) |
| `POST` | `/api/document/folder/list` | `PubApi_ListDocumentFolders` | [post-pub-api-list-document-folders.mjs](../src/javascript/endpoints/user/document/post-pub-api-list-document-folders.mjs) | [post-pub-api-list-document-folders.sh](../src/curl/endpoints/user/document/post-pub-api-list-document-folders.sh) |
| `POST` | `/api/document/list` | `PubApi_ListDocuments` | [post-pub-api-list-documents.mjs](../src/javascript/endpoints/user/document/post-pub-api-list-documents.mjs) | [post-pub-api-list-documents.sh](../src/curl/endpoints/user/document/post-pub-api-list-documents.sh) |

## User / Message

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `POST` | `/api/message/cancel` | `PubApi_CancelMessage` | [post-pub-api-cancel-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-cancel-message.mjs) | [post-pub-api-cancel-message.sh](../src/curl/endpoints/user/message/post-pub-api-cancel-message.sh) |
| `POST` | `/api/message/delegate` | `PubApi_DelegateMessage` | [post-pub-api-delegate-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-delegate-message.mjs) | [post-pub-api-delegate-message.sh](../src/curl/endpoints/user/message/post-pub-api-delegate-message.sh) |
| `DELETE` | `/api/message/delete` | `PubApi_DeleteMessage` | [delete-pub-api-delete-message.mjs](../src/javascript/endpoints/user/message/delete-pub-api-delete-message.mjs) | [delete-pub-api-delete-message.sh](../src/curl/endpoints/user/message/delete-pub-api-delete-message.sh) |
| `DELETE` | `/api/message/delete/trash` | `PubApi_DeleteTrashMessage` | [delete-pub-api-delete-trash-message.mjs](../src/javascript/endpoints/user/message/delete-pub-api-delete-trash-message.mjs) | [delete-pub-api-delete-trash-message.sh](../src/curl/endpoints/user/message/delete-pub-api-delete-trash-message.sh) |
| `POST` | `/api/message/delete_state` | `PubApi_GetMessageDeleteStatus` | [post-pub-api-get-message-delete-status.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-message-delete-status.mjs) | [post-pub-api-get-message-delete-status.sh](../src/curl/endpoints/user/message/post-pub-api-get-message-delete-status.sh) |
| `POST` | `/api/message/details` | `PubApi_MessageDetails` | [post-pub-api-message-details.mjs](../src/javascript/endpoints/user/message/post-pub-api-message-details.mjs) | [post-pub-api-message-details.sh](../src/curl/endpoints/user/message/post-pub-api-message-details.sh) |
| `POST` | `/api/message/download` | `PubApi_DownloadMessage` | [post-pub-api-download-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-download-message.mjs) | [post-pub-api-download-message.sh](../src/curl/endpoints/user/message/post-pub-api-download-message.sh) |
| `POST` | `/api/message/downloaded` | `PubApi_MarkMessageAsDownloaded` | [post-pub-api-mark-message-as-downloaded.mjs](../src/javascript/endpoints/user/message/post-pub-api-mark-message-as-downloaded.mjs) | [post-pub-api-mark-message-as-downloaded.sh](../src/curl/endpoints/user/message/post-pub-api-mark-message-as-downloaded.sh) |
| `POST` | `/api/message/folders` | `PubApi_GetMessageFolders` | [post-pub-api-get-message-folders.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-message-folders.mjs) | [post-pub-api-get-message-folders.sh](../src/curl/endpoints/user/message/post-pub-api-get-message-folders.sh) |
| `POST` | `/api/message/forward` | `PubApi_ForwardToUser` | [post-pub-api-forward-to-user.mjs](../src/javascript/endpoints/user/message/post-pub-api-forward-to-user.mjs) | [post-pub-api-forward-to-user.sh](../src/curl/endpoints/user/message/post-pub-api-forward-to-user.sh) |
| `GET` | `/api/message/image` | `PubApi_RetrieveImage` | [get-pub-api-retrieve-image.mjs](../src/javascript/endpoints/user/message/get-pub-api-retrieve-image.mjs) | [get-pub-api-retrieve-image.sh](../src/curl/endpoints/user/message/get-pub-api-retrieve-image.sh) |
| `POST` | `/api/message/list` | `PubApi_GetMessageList` | [post-pub-api-get-message-list.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-message-list.mjs) | [post-pub-api-get-message-list.sh](../src/curl/endpoints/user/message/post-pub-api-get-message-list.sh) |
| `POST` | `/api/message/move` | `PubApi_MoveMessage` | [post-pub-api-move-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-move-message.mjs) | [post-pub-api-move-message.sh](../src/curl/endpoints/user/message/post-pub-api-move-message.sh) |
| `POST` | `/api/message/read` | `PubApi_MarkMessageAsRead` | [post-pub-api-mark-message-as-read.mjs](../src/javascript/endpoints/user/message/post-pub-api-mark-message-as-read.mjs) | [post-pub-api-mark-message-as-read.sh](../src/curl/endpoints/user/message/post-pub-api-mark-message-as-read.sh) |
| `POST` | `/api/message/read_state` | `PubApi_GetMessageReadState` | [post-pub-api-get-message-read-state.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-message-read-state.mjs) | [post-pub-api-get-message-read-state.sh](../src/curl/endpoints/user/message/post-pub-api-get-message-read-state.sh) |
| `POST` | `/api/message/retry` | `PubApi_RetryFailedMessage` | [post-pub-api-retry-failed-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-retry-failed-message.mjs) | [post-pub-api-retry-failed-message.sh](../src/curl/endpoints/user/message/post-pub-api-retry-failed-message.sh) |
| `POST` | `/api/message/send` | `PubApi_SendMessage` | [post-pub-api-send-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-send-message.mjs) | [post-pub-api-send-message.sh](../src/curl/endpoints/user/message/post-pub-api-send-message.sh) |
| `POST` | `/api/message/send/internal` | `PubApi_SendInternalMessage` | [post-pub-api-send-internal-message.mjs](../src/javascript/endpoints/user/message/post-pub-api-send-internal-message.mjs) | [post-pub-api-send-internal-message.sh](../src/curl/endpoints/user/message/post-pub-api-send-internal-message.sh) |
| `POST` | `/api/message/status` | `PubApi_GetMessageStatus` | [post-pub-api-get-message-status.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-message-status.mjs) | [post-pub-api-get-message-status.sh](../src/curl/endpoints/user/message/post-pub-api-get-message-status.sh) |
| `PUT` | `/api/message/subject` | `PubApi_UpdateMessageSubject` | [put-pub-api-update-message-subject.mjs](../src/javascript/endpoints/user/message/put-pub-api-update-message-subject.mjs) | [put-pub-api-update-message-subject.sh](../src/curl/endpoints/user/message/put-pub-api-update-message-subject.sh) |
| `POST` | `/api/message/tracking` | `PubApi_GetTrackRecords` | [post-pub-api-get-track-records.mjs](../src/javascript/endpoints/user/message/post-pub-api-get-track-records.mjs) | [post-pub-api-get-track-records.sh](../src/curl/endpoints/user/message/post-pub-api-get-track-records.sh) |
| `PUT` | `/api/message/tracking` | `PubApi_UpdateTrackRecord` | [put-pub-api-update-track-record.mjs](../src/javascript/endpoints/user/message/put-pub-api-update-track-record.mjs) | [put-pub-api-update-track-record.sh](../src/curl/endpoints/user/message/put-pub-api-update-track-record.sh) |

## User / Upload

| Method | Path | Operation | JS | curl |
| --- | --- | --- | --- | --- |
| `POST` | `/api/upload` | `PubApi_FileUpload` | [post-pub-api-file-upload.mjs](../src/javascript/endpoints/user/upload/post-pub-api-file-upload.mjs) | [post-pub-api-file-upload.sh](../src/curl/endpoints/user/upload/post-pub-api-file-upload.sh) |


