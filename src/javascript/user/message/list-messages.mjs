import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/message/list', {
  folderName: process.env.FAXCORE_FOLDER || 'inbox',
  startDate: process.env.FAXCORE_START_DATE || '20000101',
  endDate: process.env.FAXCORE_END_DATE || '20991231',
  isRead: process.env.FAXCORE_IS_READ || 'all',
  isDownloaded: process.env.FAXCORE_IS_DOWNLOADED || 'all',
  sortDescending: true,
  pagination: {
    page: Number(process.env.FAXCORE_PAGE || 1),
    maxResult: Number(process.env.FAXCORE_MAX_RESULT || 25)
  }
});

printResult('Message list', result);
