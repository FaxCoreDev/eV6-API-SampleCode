import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete an address book.');
}

const client = new FaxCoreClient();
const result = await client.delete('/api/addressbook', {
  addressBookID: Number(process.env.FAXCORE_ADDRESS_BOOK_ID || 0)
});

printResult('Delete address book', result);
