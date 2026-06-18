import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Mark specific message read status to read or unread. This is a simple message flag set.
await runEndpointSample({
  title: 'MarkMessageAsRead',
  method: 'POST',
  path: '/api/message/read',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "isRead":  true
},
  destructive: true
});
