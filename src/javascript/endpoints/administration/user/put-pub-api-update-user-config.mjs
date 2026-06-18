import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update user config.
await runEndpointSample({
  title: 'UpdateUserConfig',
  method: 'PUT',
  path: '/api/user/config',
  query: {

},
  body: {
    "config":  {
                   "configName":  "Sample Name",
                   "configValue":  "sample-value"
               }
},
  destructive: true
});
