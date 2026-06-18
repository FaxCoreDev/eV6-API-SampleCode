import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update existing user address book. Roles segregation applies.
await runEndpointSample({
  title: 'UpdateAddressBook',
  method: 'POST',
  path: '/api/addressbook/update',
  query: {

},
  body: {
    "bookID":  1,
    "addressBookName":  "+15551234567"
},
  destructive: true
});
