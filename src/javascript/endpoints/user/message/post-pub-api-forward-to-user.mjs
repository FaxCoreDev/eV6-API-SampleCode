import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Forward specific message to list of users.
await runEndpointSample({
  title: 'ForwardToUser',
  method: 'POST',
  path: '/api/message/forward',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "usernames":  "sample.user"
},
  destructive: true
});
