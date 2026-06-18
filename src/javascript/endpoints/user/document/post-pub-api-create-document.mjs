import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create a document.
await runEndpointSample({
  title: 'CreateDocument',
  method: 'POST',
  path: '/api/document',
  query: {

},
  body: {
    "uploadedFileName":  "Sample Name",
    "folderID":  1,
    "documentName":  "Sample Name",
    "type":  "sample-value",
    "visibility":  "sample-value",
    "description":  "sample-value"
},
  destructive: true
});
