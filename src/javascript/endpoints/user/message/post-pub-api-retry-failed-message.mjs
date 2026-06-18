import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Set existing message with failed status to resend (ie, reattempt.). Only valid for own messages.
await runEndpointSample({
  title: 'RetryFailedMessage',
  method: 'POST',
  path: '/api/message/retry',
  query: {

},
  body: {
    "messageID":  "sample-message-id"
},
  destructive: true
});
