import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'DeletePrinter',
  method: 'DELETE',
  path: '/api/printer',
  query: {

},
  body: {
    "printerIds":  1
},
  destructive: true
});
