import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Search for inbound routes with user input filters.
await runEndpointSample({
  title: 'SearchInboundRoute',
  method: 'POST',
  path: '/api/route/search',
  query: {

},
  body: {
    "input":  "sample-value"
},
  destructive: false
});
