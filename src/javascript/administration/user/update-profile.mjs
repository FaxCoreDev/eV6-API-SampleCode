import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

if (process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
  throw new Error('Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a user profile.');
}

const id = process.env.FAXCORE_PROFILE_USER_ID || process.env.FAXCORE_USERNAME;
if (!id) {
  throw new Error('FAXCORE_PROFILE_USER_ID or FAXCORE_USERNAME is required.');
}

const client = new FaxCoreClient();
const result = await client.put('/api/update/profile', {
  id,
  profile: {
    role: process.env.FAXCORE_PROFILE_ROLE || 'User',
    isExternalAuth: (process.env.FAXCORE_PROFILE_EXTERNAL_AUTH || 'false').toLowerCase() === 'true',
    isActive: (process.env.FAXCORE_PROFILE_ACTIVE || 'true').toLowerCase() !== 'false',
    displayName: process.env.FAXCORE_PROFILE_DISPLAY_NAME || 'Sample User',
    firstName: process.env.FAXCORE_PROFILE_FIRST_NAME || 'Sample',
    lastName: process.env.FAXCORE_PROFILE_LAST_NAME || 'User',
    companyName: process.env.FAXCORE_PROFILE_COMPANY || 'Example Company',
    preferAddressType: process.env.FAXCORE_PROFILE_PREFER_ADDRESS_TYPE || 'Fax',
    desc: process.env.FAXCORE_PROFILE_DESCRIPTION || 'Updated from JavaScript sample',
    csid: process.env.FAXCORE_PROFILE_CSID || '',
    callerID: process.env.FAXCORE_PROFILE_CALLER_ID || '',
    email: process.env.FAXCORE_PROFILE_EMAIL || 'user@example.com',
    addresses: []
  }
});

printResult('Update profile', result);
