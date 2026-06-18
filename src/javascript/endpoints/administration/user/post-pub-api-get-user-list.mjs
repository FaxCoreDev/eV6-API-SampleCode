import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve user list in a domain. Roles segregation applies.
await runEndpointSample({
  title: 'GetUserList',
  method: 'POST',
  path: '/api/users/list',
  query: {

},
  body: {
    "domain":  "sample-domain"
},
  destructive: false
});
