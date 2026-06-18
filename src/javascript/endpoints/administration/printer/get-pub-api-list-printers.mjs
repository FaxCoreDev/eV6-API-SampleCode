import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'ListPrinters',
  method: 'GET',
  path: '/api/printer',
  query: {

},
  body: undefined,
  destructive: true
});
