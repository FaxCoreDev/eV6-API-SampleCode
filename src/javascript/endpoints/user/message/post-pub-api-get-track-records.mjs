import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve tracking record for a specific message. Roles segregation applies.
await runEndpointSample({
  title: 'GetTrackRecords',
  method: 'POST',
  path: '/api/message/tracking',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
