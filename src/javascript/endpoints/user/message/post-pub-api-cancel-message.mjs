import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Cancel message active transmission.
await runEndpointSample({
  title: 'CancelMessage',
  method: 'POST',
  path: '/api/message/cancel',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
