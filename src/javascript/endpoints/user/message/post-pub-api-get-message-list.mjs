import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve user's message list from specified folder.
await runEndpointSample({
  title: 'GetMessageList',
  method: 'POST',
  path: '/api/message/list',
  query: {

},
  body: {
    "folderName":  "Inbox",
    "startDate":  "2026-01-01",
    "endDate":  "2026-01-01",
    "read":  "All",
    "downloaded":  "All",
    "sortDescending":  true,
    "pagination":  {
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
