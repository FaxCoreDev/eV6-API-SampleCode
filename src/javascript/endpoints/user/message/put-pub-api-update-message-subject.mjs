import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update specified message's subject
await runEndpointSample({
  title: 'UpdateMessageSubject',
  method: 'PUT',
  path: '/api/message/subject',
  query: {

},
  body: {
    "messageId":  "sample-message-id",
    "value":  "sample-value"
},
  destructive: true
});
