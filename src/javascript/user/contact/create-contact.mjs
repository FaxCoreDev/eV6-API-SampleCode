import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to create a contact.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/contact', {
  addressBookID: Number(process.env.FAXCORE_ADDRESS_BOOK_ID || 0),
  displayName: process.env.FAXCORE_CONTACT_DISPLAY_NAME || 'Sample Contact',
  firstName: process.env.FAXCORE_CONTACT_FIRST_NAME || 'Sample',
  lastName: process.env.FAXCORE_CONTACT_LAST_NAME || 'Contact',
  compName: process.env.FAXCORE_CONTACT_COMPANY || 'Example Company',
  preferAddressType: process.env.FAXCORE_CONTACT_PREFER_ADDRESS_TYPE || 'Fax',
  visibility: process.env.FAXCORE_CONTACT_VISIBILITY || 'Private',
  description: process.env.FAXCORE_CONTACT_DESCRIPTION || 'Created from JavaScript sample',
  notifyOnFailed: (process.env.FAXCORE_CONTACT_NOTIFY_ON_FAILED || 'true').toLowerCase() !== 'false',
  notifyOnSuccess: (process.env.FAXCORE_CONTACT_NOTIFY_ON_SUCCESS || 'true').toLowerCase() !== 'false',
  addressList: [
    {
      addrType: process.env.FAXCORE_CONTACT_ADDRESS_TYPE || 'Fax',
      address: process.env.FAXCORE_CONTACT_ADDRESS || '+15551234567'
    }
  ]
});

printResult('Create contact', result);
