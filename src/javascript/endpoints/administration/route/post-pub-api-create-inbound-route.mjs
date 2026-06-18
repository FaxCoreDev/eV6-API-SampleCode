import { runEndpointSample } from '../../../common/endpointSample.mjs';

// Create new inbound routing rules in FaxCore.
await runEndpointSample({
  title: 'CreateInboundRoute',
  method: 'POST',
  path: '/api/route/inbound',
  query: {

},
  body: {
    "forwardedUserName":  "sample.user",
    "condition1":  "sample-value",
    "conditionExp1":  "sample-value",
    "isAndOperator":  true,
    "condition2":  "sample-value",
    "conditionExp2":  "sample-value",
    "isActive":  true,
    "priority":  1
},
  destructive: true
});
