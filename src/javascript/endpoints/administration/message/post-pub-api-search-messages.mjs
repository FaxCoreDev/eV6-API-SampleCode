import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Search Messages within the domain
await runEndpointSample({
  title: 'SearchMessages',
  method: 'POST',
  path: '/api/message/search',
  query: {

},
  body: {
    "userName":  "sample.user",
    "fromDate":  "2026-01-01",
    "toDate":  "2026-01-01",
    "msgNo":  "sample-value",
    "msgId":  "sample-message-id",
    "trackValue":  "sample-value",
    "recpName":  "Sample Name",
    "faxAddr":  "+15551234567",
    "email":  "user@example.com",
    "localCSID":  "sample-value",
    "subject":  "Sample subject",
    "msgType":  0,
    "isFailed":  0,
    "isHeld":  0,
    "routingInfo":  "sample-value",
    "isPrinted":  0,
    "isSave":  0,
    "status":  0,
    "includeSubDomain":  0,
    "pagination":  {
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
