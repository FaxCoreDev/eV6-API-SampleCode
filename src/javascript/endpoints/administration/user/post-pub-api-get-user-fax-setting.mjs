import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Retrieve specific userâ€™s fax settings.
await runEndpointSample({
  title: 'GetUserFaxSetting',
  method: 'POST',
  path: '/api/user/faxsetting',
  query: {

},
  body: {
    "user":  "sample.user"
},
  destructive: false
});
