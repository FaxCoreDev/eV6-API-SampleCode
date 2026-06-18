import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update an address book.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/addressbook/update', {
  bookID: Number(process.env.FAXCORE_ADDRESS_BOOK_ID || 0),
  addressBookName: process.env.FAXCORE_ADDRESS_BOOK_NAME || 'Sample Address Book'
});

printResult('Update address book', result);
