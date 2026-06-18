import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all user's document folders
await runEndpointSample({
  title: 'ListDocumentFolders',
  method: 'POST',
  path: '/api/document/folder/list',
  query: {

},
  body: {
    "pagination":  {
                       "search":  "sample-value",
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
