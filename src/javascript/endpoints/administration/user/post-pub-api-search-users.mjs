import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve authenticated userâ€™s details.
await runEndpointSample({
  title: 'SearchUsers',
  method: 'POST',
  path: '/api/user/search',
  query: {

},
  body: {
    "userName":  "sample.user",
    "displayName":  "Sample Name",
    "active":  "sample-value",
    "firstName":  "Sample Name",
    "lastName":  "Sample Name",
    "preferredAddress":  "+15551234567",
    "allDomain":  "sample-domain",
    "pagination":  {
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
