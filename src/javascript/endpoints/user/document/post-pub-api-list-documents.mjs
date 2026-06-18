import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all user's documents.
await runEndpointSample({
  title: 'ListDocuments',
  method: 'POST',
  path: '/api/document/list',
  query: {

},
  body: {
    "folderID":  1,
    "pagination":  {
                       "search":  "sample-value",
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
