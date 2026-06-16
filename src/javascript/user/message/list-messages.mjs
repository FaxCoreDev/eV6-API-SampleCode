import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/message/list', {
  folderName: process.env.FAXCORE_FOLDER || 'Inbox',
  sortDescending: true,
  pagination: {
    page: Number(process.env.FAXCORE_PAGE || 1),
    maxResult: Number(process.env.FAXCORE_MAX_RESULT || 25)
  }
});

printResult('Message list', result);
