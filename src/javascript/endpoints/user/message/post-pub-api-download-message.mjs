import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Download message based on filter values. This consolidate 4 different methods in ev5 into single entry. Delivery ID(transaction id) in ev5 no longer relevant as transaction ID value only available from get message details.
await runEndpointSample({
  title: 'DownloadMessage',
  method: 'POST',
  path: '/api/message/download',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "msgOwnerID":  "sample-value",
    "deliveryNum":  1,
    "downloadType":  "sample-value",
    "startPageIndex":  1,
    "excludePageList":  1
},
  destructive: false
});
