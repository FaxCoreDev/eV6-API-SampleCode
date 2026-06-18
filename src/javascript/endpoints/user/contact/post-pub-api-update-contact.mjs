import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update existing contact in specific address book. Payload contain only 1 address for each type.
await runEndpointSample({
  title: 'UpdateContact',
  method: 'POST',
  path: '/api/contact/update',
  query: {

},
  body: {
    "contactID":  1,
    "addressBookID":  1,
    "displayName":  "Sample Name",
    "firstName":  "Sample Name",
    "lastName":  "Sample Name",
    "compName":  "Sample Name",
    "preferAddressType":  "+15551234567",
    "visibility":  "sample-value",
    "description":  "sample-value",
    "notifyOnFailed":  true,
    "notifyOnSuccess":  true,
    "addressList":  {
                        "addrType":  "sample-value",
                        "address":  "+15551234567",
                        "addressID":  1
                    }
},
  destructive: true
});
