import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Move existing message from one folder to another, include personal folder. The move only happen within user's account, does not support cross user account.
await runEndpointSample({
  title: 'MoveMessage',
  method: 'POST',
  path: '/api/message/move',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "folderName":  "Inbox"
},
  destructive: true
});
