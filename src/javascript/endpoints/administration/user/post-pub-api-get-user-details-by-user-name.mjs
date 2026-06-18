import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve authenticated userâ€™s details.
await runEndpointSample({
  title: 'GetUserDetailsByUserName',
  method: 'POST',
  path: '/api/user/details',
  query: {

},
  body: {
    "user":  "sample.user"
},
  destructive: false
});
