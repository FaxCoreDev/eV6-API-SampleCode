import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Disable existing inbound routing rules..
await runEndpointSample({
  title: 'DisabledInboudRoute',
  method: 'POST',
  path: '/api/route/disable',
  query: {

},
  body: {
    "routeID":  1
},
  destructive: true
});
