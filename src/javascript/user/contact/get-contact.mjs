import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const contactID = process.env.FAXCORE_CONTACT_ID;
if (!contactID) {
  throw new Error('FAXCORE_CONTACT_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.get('/api/contact', {
  'model.contactID': Number(contactID)
});

printResult('Get contact', result);
