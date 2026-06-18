import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete messages belong to authenticated user. Only able to delete own messages. For SystemAdmin, able to delete all messages. Delete one or many messages.
await runEndpointSample({
  title: 'DeleteMessage',
  method: 'DELETE',
  path: '/api/message/delete',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
