import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'RetrieveImage',
  method: 'GET',
  path: '/api/message/image',
  query: {
    "model.messageID":  "sample-message-id",
    "model.xsactSeq":  1,
    "model.page":  1,
    "model.width":  1
},
  body: undefined,
  destructive: false
});
