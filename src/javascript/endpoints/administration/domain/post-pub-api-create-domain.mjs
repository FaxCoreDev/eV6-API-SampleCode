import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create a new domain. Always specify parent domain.
await runEndpointSample({
  title: 'CreateDomain',
  method: 'POST',
  path: '/api/domain',
  query: {

},
  body: {
    "parentDomainID":  1,
    "domainName":  "sample-domain",
    "description":  "sample-value",
    "isActive":  true
},
  destructive: true
});
