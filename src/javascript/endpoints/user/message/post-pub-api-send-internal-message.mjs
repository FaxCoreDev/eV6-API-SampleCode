import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create new message (internal). The usual user permissions applies.
await runEndpointSample({
  title: 'SendInternalMessage',
  method: 'POST',
  path: '/api/message/send/internal',
  query: {

},
  body: {
    "message":  {
                    "recipients":  {
                                       "username":  "sample.user"
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
  destructive: false
});
