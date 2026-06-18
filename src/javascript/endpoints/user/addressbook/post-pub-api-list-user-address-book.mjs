import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all user's personal address book. Exclude shared address books.
await runEndpointSample({
  title: 'ListUserAddressBook',
  method: 'POST',
  path: '/api/addressbook/list',
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
