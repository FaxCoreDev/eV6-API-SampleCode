import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve message delete status. This is a simple message delete flag retrieval.
await runEndpointSample({
  title: 'GetMessageReadState',
  method: 'POST',
  path: '/api/message/read_state',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
