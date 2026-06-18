import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update tracking record for a specific message.
await runEndpointSample({
  title: 'UpdateTrackRecord',
  method: 'PUT',
  path: '/api/message/tracking',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "trackID":  1,
    "trackValue":  "sample-value"
},
  destructive: true
});
