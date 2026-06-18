import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve list of folders belong to user. This will include private folder but not delegation. Role and domain segregation applies.
await runEndpointSample({
  title: 'GetMessageFolders',
  method: 'POST',
  path: '/api/message/folders',
  query: {

},
  body: {

},
  destructive: false
});
