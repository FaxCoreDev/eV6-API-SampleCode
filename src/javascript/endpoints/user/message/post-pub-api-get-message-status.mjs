import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve message status.
await runEndpointSample({
  title: 'GetMessageStatus',
  method: 'POST',
  path: '/api/message/status',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: false
});
