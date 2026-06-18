import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to forward a message.');
}

const messageID = process.env.FAXCORE_MESSAGE_ID;
const usernames = process.env.FAXCORE_TARGET_USERNAMES;

if (!messageID || !usernames) {
  throw new Error('FAXCORE_MESSAGE_ID and FAXCORE_TARGET_USERNAMES are required.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/message/forward', {
  messageID,
  usernames: usernames.split(',').map((value) => value.trim()).filter(Boolean)
});

printResult('Forward message', result);
