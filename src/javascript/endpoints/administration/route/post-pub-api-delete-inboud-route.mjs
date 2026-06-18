import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete existing inbound routing rules..
await runEndpointSample({
  title: 'DeleteInboudRoute',
  method: 'POST',
  path: '/api/route/delete',
  query: {

},
  body: {
    "routeID":  1
},
  destructive: true
});
