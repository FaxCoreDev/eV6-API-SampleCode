import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve delete status for a specific message. Roles segregation applies.
await runEndpointSample({
  title: 'GetMessageDeleteStatus',
  method: 'POST',
  path: '/api/message/delete_state',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
