import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Mark specific message download flag to true or false.
await runEndpointSample({
  title: 'MarkMessageAsDownloaded',
  method: 'POST',
  path: '/api/message/downloaded',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
