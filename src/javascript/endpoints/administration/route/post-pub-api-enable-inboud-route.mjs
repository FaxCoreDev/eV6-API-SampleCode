import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Enable existing inbound routing rules..
await runEndpointSample({
  title: 'EnableInboudRoute',
  method: 'POST',
  path: '/api/route/enable',
  query: {

},
  body: {
    "routeID":  1
},
  destructive: true
});
