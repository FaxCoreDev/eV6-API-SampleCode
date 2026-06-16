import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/route/search', {
  input: process.env.FAXCORE_ROUTE_SEARCH || ''
});

printResult('Inbound route search', result);
