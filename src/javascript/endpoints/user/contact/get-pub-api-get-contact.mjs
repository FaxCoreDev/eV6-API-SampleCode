import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Get contacts information
await runEndpointSample({
  title: 'GetContact',
  method: 'GET',
  path: '/api/contact',
  query: {
    "model.contactID":  1
},
  body: undefined,
  destructive: true
});
