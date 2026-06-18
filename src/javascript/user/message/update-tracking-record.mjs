import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const messageID = process.env.FAXCORE_MESSAGE_ID;
const trackID = process.env.FAXCORE_TRACK_ID;
const trackValue = process.env.FAXCORE_TRACK_VALUE;

if (!messageID || !trackID || !trackValue) {
  throw new Error('FAXCORE_MESSAGE_ID, FAXCORE_TRACK_ID, and FAXCORE_TRACK_VALUE are required.');
}

const client = new FaxCoreClient();
const result = await client.put('/api/message/tracking', {
  messageID,
  trackID: Number(trackID),
  trackValue
});

printResult('Update tracking record', result);

