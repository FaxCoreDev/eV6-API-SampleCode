import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Outbound and inbound message can assign to any users within the same domain.
await runEndpointSample({
  title: 'Assign',
  method: 'POST',
  path: '/api/message/assign',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "owner":  "sample-value",
    "usernames":  "sample.user"
},
  destructive: true
});
