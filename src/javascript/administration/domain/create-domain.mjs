import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const parentDomainID = process.env.FAXCORE_PARENT_DOMAIN_ID;
const domainName = process.env.FAXCORE_DOMAIN_NAME;

if (!parentDomainID || !domainName) {
  throw new Error('FAXCORE_PARENT_DOMAIN_ID and FAXCORE_DOMAIN_NAME are required.');
}

const client = new FaxCoreClient();

const result = await client.post('/api/domain', {
  parentDomainID: Number(parentDomainID),
  domainName,
  description: process.env.FAXCORE_DOMAIN_DESCRIPTION || '',
  isActive: (process.env.FAXCORE_DOMAIN_ACTIVE || 'true').toLowerCase() !== 'false'
});

printResult('Create domain', result);

