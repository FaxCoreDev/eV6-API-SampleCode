import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const messageID = process.env.FAXCORE_MESSAGE_ID;
if (!messageID) {
  throw new Error('FAXCORE_MESSAGE_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.get('/api/message/image', {
  'model.messageID': messageID,
  'model.xsactSeq': process.env.FAXCORE_XSACT_SEQ || 1,
  'model.page': process.env.FAXCORE_IMAGE_PAGE || 1,
  'model.width': process.env.FAXCORE_IMAGE_WIDTH || 800
});

printResult('Message image', result);
