import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete a specific user. Roles segregation applies.
await runEndpointSample({
  title: 'RemoveUser',
  method: 'DELETE',
  path: '/api/user/delete',
  query: {

},
  body: {
    "user":  "sample.user"
},
  destructive: true
});
