import { runEndpointSample } from '../../../common/endpointSample.mjs';

// List all available domain. Roles segregation applies.
await runEndpointSample({
  title: 'ListDomain',
  method: 'GET',
  path: '/api/domain',
  query: {

},
  body: undefined,
  destructive: true
});
