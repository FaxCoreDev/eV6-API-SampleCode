import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Move user to specific domain.
await runEndpointSample({
  title: 'MoveUser',
  method: 'POST',
  path: '/api/user/move',
  query: {

},
  body: {
    "user":  "sample.user",
    "domainName":  "sample-domain"
},
  destructive: true
});
