import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all user's cover page. (Includes shared documents, domain documents)
await runEndpointSample({
  title: 'ListCoverPage',
  method: 'GET',
  path: '/api/document/coverpage',
  query: {

},
  body: undefined,
  destructive: false
});
