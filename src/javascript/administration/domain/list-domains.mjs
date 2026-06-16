import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();
const result = await client.get('/api/domain');

printResult('Domain list', result);

