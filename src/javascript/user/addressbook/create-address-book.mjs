import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to create an address book.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/addressbook', {
  addressBookName: process.env.FAXCORE_ADDRESS_BOOK_NAME || 'Sample Address Book'
});

printResult('Create address book', result);
