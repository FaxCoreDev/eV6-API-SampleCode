import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a message subject.');
}

const messageID = process.env.FAXCORE_MESSAGE_ID;
const subject = process.env.FAXCORE_MESSAGE_SUBJECT;

if (!messageID || !subject) {
  throw new Error('FAXCORE_MESSAGE_ID and FAXCORE_MESSAGE_SUBJECT are required.');
}

const client = new FaxCoreClient();
const result = await client.put('/api/message/subject', {
  messageId: messageID,
  value: subject
});

printResult('Update message subject', result);
