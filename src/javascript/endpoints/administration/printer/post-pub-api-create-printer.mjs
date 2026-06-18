import { runEndpointSample } from '../../../common/endpointSample.mjs';

// 
await runEndpointSample({
  title: 'CreatePrinter',
  method: 'POST',
  path: '/api/printer',
  query: {

},
  body: {
    "domain":  "sample-domain",
    "printer":  "sample-value",
    "description":  "sample-value",
    "visibility":  1,
    "setActive":  0,
    "serverName":  "Sample Name",
    "connectDomain":  "sample-domain",
    "connectUsername":  "sample.user",
    "connectPassword":  "change-me",
    "printerName":  "Sample Name",
    "paperSize":  0,
    "fontName":  0,
    "fontSize":  1,
    "fontWeight":  0,
    "allowBannerPage":  0,
    "hMargin":  1,
    "vMargin":  1,
    "bannerPage":  "sample-value"
},
  destructive: true
});
