import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete specific contact from user address book.
await runEndpointSample({
  title: 'DeleteContact',
  method: 'DELETE',
  path: '/api/contact',
  query: {

},
  body: {
    "contactID":  1
},
  destructive: true
});
