import { runEndpointSample } from '../../../common/endpointSample.mjs';

// To approve or disapprove a message.
await runEndpointSample({
  title: 'Approval',
  method: 'POST',
  path: '/api/message/approval',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "approve":  true,
    "notes":  "sample-value"
},
  destructive: true
});
