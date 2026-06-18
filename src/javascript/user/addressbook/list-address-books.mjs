import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();
const result = await client.post('/api/addressbook/list', {
  pagination: {
    search: process.env.FAXCORE_ADDRESS_BOOK_SEARCH || '',
    page: Number(process.env.FAXCORE_PAGE || 1),
    maxResult: Number(process.env.FAXCORE_MAX_RESULT || 25)
  }
});

printResult('Address book list', result);
