import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Delete specific address book from user account. Address book with existing contact will get exception.
await runEndpointSample({
  title: 'DeleteAddressBook',
  method: 'DELETE',
  path: '/api/addressbook',
  query: {

},
  body: {
    "addressBookID":  1
},
  destructive: true
});
