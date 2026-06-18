import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all contacts in a specific address book belong to user.
await runEndpointSample({
  title: 'ListUserContact',
  method: 'POST',
  path: '/api/contact/list',
  query: {

},
  body: {
    "addressBookID":  1,
    "isContactGroup":  true,
    "addressType":  "+15551234567",
    "pagination":  {
                       "search":  "sample-value",
                       "maxResult":  1,
                       "page":  1
                   }
},
  destructive: false
});
