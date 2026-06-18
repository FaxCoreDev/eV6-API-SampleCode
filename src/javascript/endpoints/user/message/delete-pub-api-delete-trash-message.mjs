import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'DeleteTrashMessage',
  method: 'DELETE',
  path: '/api/message/delete/trash',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
