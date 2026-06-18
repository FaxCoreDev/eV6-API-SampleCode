import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a contact.');
}

const contactID = process.env.FAXCORE_CONTACT_ID;
if (!contactID) {
  throw new Error('FAXCORE_CONTACT_ID is required.');
}

const client = new FaxCoreClient();
const result = await client.post('/api/contact/update', {
  contactID: Number(contactID),
  addressBookID: Number(process.env.FAXCORE_ADDRESS_BOOK_ID || 0),
  displayName: process.env.FAXCORE_CONTACT_DISPLAY_NAME || 'Sample Contact',
  firstName: process.env.FAXCORE_CONTACT_FIRST_NAME || 'Sample',
  lastName: process.env.FAXCORE_CONTACT_LAST_NAME || 'Contact',
  compName: process.env.FAXCORE_CONTACT_COMPANY || 'Example Company',
  preferAddressType: process.env.FAXCORE_CONTACT_PREFER_ADDRESS_TYPE || 'Fax',
  visibility: process.env.FAXCORE_CONTACT_VISIBILITY || 'Private',
  description: process.env.FAXCORE_CONTACT_DESCRIPTION || 'Updated from JavaScript sample',
  notifyOnFailed: (process.env.FAXCORE_CONTACT_NOTIFY_ON_FAILED || 'true').toLowerCase() !== 'false',
  notifyOnSuccess: (process.env.FAXCORE_CONTACT_NOTIFY_ON_SUCCESS || 'true').toLowerCase() !== 'false',
  addressList: [
    {
      addrType: process.env.FAXCORE_CONTACT_ADDRESS_TYPE || 'Fax',
      address: process.env.FAXCORE_CONTACT_ADDRESS || '+15551234567',
      addressID: Number(process.env.FAXCORE_CONTACT_ADDRESS_ID || 0)
    }
  ]
});

printResult('Update contact', result);
