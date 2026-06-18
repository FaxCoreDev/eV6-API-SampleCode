import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Send message on behalf of other user.
await runEndpointSample({
  title: 'DelegateMessage',
  method: 'POST',
  path: '/api/message/delegate',
  query: {

},
  body: {
    "message":  {
                    "username":  "sample.user",
                    "recipients":  {
                                       "name":  "Sample Name",
                                       "address":  "+15551234567",
                                       "rawFax":  true,
                                       "notifyAddress":  "+15551234567",
                                       "company":  "sample-value"
                                   },
                    "senderName":  "Sample Name",
                    "senderCompName":  "Sample Name",
                    "subject":  "Sample subject",
                    "note":  "sample-value",
                    "billingCode":  "sample-value",
                    "scheduleDate":  "2026-01-01",
                    "priority":  1,
                    "isOnHold":  true,
                    "mss":  true,
                    "msf":  true,
                    "trackings":  {
                                      "label":  "sample-value",
                                      "value":  "sample-value"
                                  },
                    "documents":  {
                                      "name":  "Sample Name",
                                      "path":  "sample-value",
                                      "isMerge":  true
                                  },
                    "agents":  {
                                   "id":  "sample-value",
                                   "type":  "sample-value",
                                   "value":  "sample-value"
                               }
                }
},
  destructive: true
});
