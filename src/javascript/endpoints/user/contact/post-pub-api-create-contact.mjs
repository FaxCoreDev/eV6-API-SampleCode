import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create new contact in specific address book. Payload contain only 1 address for each type.
await runEndpointSample({
  title: 'CreateContact',
  method: 'POST',
  path: '/api/contact',
  query: {

},
  body: {
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
                        "address":  "+15551234567"
                    }
},
  destructive: true
});
