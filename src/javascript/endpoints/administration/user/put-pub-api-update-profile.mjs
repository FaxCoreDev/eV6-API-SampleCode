import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'UpdateProfile',
  method: 'PUT',
  path: '/api/update/profile',
  query: {

},
  body: {
    "id":  "sample-value",
    "profile":  {
                    "role":  "sample-value",
                    "isExternalAuth":  true,
                    "isActive":  true,
                    "displayName":  "Sample Name",
                    "firstName":  "Sample Name",
                    "lastName":  "Sample Name",
                    "companyName":  "Sample Name",
                    "preferAddressType":  "+15551234567",
                    "desc":  "sample-value",
                    "csid":  "sample-value",
                    "callerID":  "sample-value",
                    "email":  "user@example.com",
                    "addresses":  {
                                      "addressID":  1,
                                      "addressType":  "+15551234567",
                                      "address":  "+15551234567",
                                      "isPrimary":  true,
                                      "nor":  true,
                                      "nos":  true
                                  }
                }
},
  destructive: true
});
