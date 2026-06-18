import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete a contact.');
}

const contactID = process.env.FAXCORE_CONTACT_ID;
if (!contactID) {
  throw new Error('FAXCORE_CONTACT_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.delete('/api/contact', {
  contactID: Number(contactID)
});

printResult('Delete contact', result);
