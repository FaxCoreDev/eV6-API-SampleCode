import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete messages.');
}

const messageID = process.env.FAXCORE_MESSAGE_ID;
if (!messageID) {
  throw new Error('FAXCORE_MESSAGE_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.delete('/api/message/delete', {
  messageID: messageID.split(',').map((value) => value.trim()).filter(Boolean)
});

printResult('Delete message', result);

