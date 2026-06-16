import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/users/list', {
  domain: process.env.FAXCORE_DOMAIN || ''
});

printResult('User list', result);
