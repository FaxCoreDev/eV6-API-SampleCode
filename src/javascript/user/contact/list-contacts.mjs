import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/contact/list', {
  addressBookID: Number(process.env.FAXCORE_ADDRESS_BOOK_ID || 0),
  isContactGroup: false,
  addressType: ['Fax', 'Email'],
  pagination: {
    search: process.env.FAXCORE_CONTACT_SEARCH || '',
    page: Number(process.env.FAXCORE_PAGE || 1),
    maxResult: Number(process.env.FAXCORE_MAX_RESULT || 25)
  }
});

printResult('Contact list', result);
