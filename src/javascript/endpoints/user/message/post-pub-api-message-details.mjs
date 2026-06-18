import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve message details belong to auth user. SystemAdmin and DomainAdmin role able to access messages according to standard role segregation.
await runEndpointSample({
  title: 'MessageDetails',
  method: 'POST',
  path: '/api/message/details',
  query: {

},
  body: {
    "messageID":  "sample-message-id",
    "msgOwnerID":  "sample-value"
},
  destructive: false
});
