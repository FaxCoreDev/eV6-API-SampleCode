import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const messageID = process.env.FAXCORE_MESSAGE_ID;
if (!messageID) {
  throw new Error('FAXCORE_MESSAGE_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/message/status', { messageID });

printResult('Message status', result);

