import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create new user address book. Roles segregation applies.
await runEndpointSample({
  title: 'CreateAddressBook',
  method: 'POST',
  path: '/api/addressbook',
  query: {

},
  body: {
    "addressBookName":  "+15551234567"
},
  destructive: true
});
