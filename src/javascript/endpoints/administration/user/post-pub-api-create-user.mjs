import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create new user in a specific domain. Only create in domain which user belong to.
await runEndpointSample({
  title: 'CreateUser',
  method: 'POST',
  path: '/api/user/create',
  query: {

},
  body: {
    "domainName":  "sample-domain",
    "userName":  "sample.user",
    "password":  "change-me",
    "role":  "sample-value",
    "isExternalAuth":  true,
    "isActive":  true,
    "displayName":  "Sample Name",
    "firstName":  "Sample Name",
    "lastName":  "Sample Name",
    "companyName":  "Sample Name",
    "preferAddressType":  "+15551234567",
    "email":  "user@example.com",
    "sentEmailConfirmation":  true,
    "fax":  "+15551234567",
    "rawFax":  "+15551234567",
    "nor":  true,
    "nos":  true,
    "desc":  "sample-value",
    "callerID":  "sample-value",
    "csid":  "sample-value",
    "userLoginInfo":  {
                          "loginProvider":  "sample-value",
                          "providerKey":  "sample-value"
                      }
},
  destructive: true
});
