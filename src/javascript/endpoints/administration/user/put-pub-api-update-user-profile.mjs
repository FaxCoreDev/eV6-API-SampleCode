import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Update user profile.
await runEndpointSample({
  title: 'UpdateUserProfile',
  method: 'PUT',
  path: '/api/user/profile',
  query: {

},
  body: {
    "isExternalAuth":  true,
    "isActive":  true,
    "displayName":  "Sample Name",
    "firstName":  "Sample Name",
    "lastName":  "Sample Name",
    "companyName":  "Sample Name",
    "preferAddressType":  "+15551234567",
    "desc":  "sample-value",
    "localCSID":  "sample-value",
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
},
  destructive: true
});
