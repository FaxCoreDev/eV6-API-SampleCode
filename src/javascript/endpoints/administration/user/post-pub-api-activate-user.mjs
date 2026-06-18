import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Activate user in a specific domain. Only applicable to users in domain which the user has access to.
await runEndpointSample({
  title: 'ActivateUser',
  method: 'POST',
  path: '/api/user/activate',
  query: {

},
  body: {
    "userIDList":  "sample.user"
},
  destructive: true
});
