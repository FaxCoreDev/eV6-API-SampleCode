import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete a document
await runEndpointSample({
  title: 'DeleteDocument',
  method: 'DELETE',
  path: '/api/document',
  query: {

},
  body: {
    "documentID":  1,
    "folderID":  1
},
  destructive: true
});
