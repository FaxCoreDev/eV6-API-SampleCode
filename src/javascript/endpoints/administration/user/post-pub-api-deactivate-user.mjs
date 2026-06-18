import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Deactivate user in a specific domain. Only applicable to users in domain which the user has access to.
await runEndpointSample({
  title: 'DeactivateUser',
  method: 'POST',
  path: '/api/user/deactivate',
  query: {

},
  body: {
    "userIDList":  "sample.user"
},
  destructive: true
});
