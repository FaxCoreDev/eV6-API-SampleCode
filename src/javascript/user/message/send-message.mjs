import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const client = new FaxCoreClient();

const result = await client.post('/api/message/send', {
  message: {
    recipients: [
      {
        name: process.env.FAXCORE_RECIPIENT_NAME || 'Sample Recipient',
        address: process.env.FAXCORE_RECIPIENT_FAX || '+15551234567',
        rawFax: true
      }
    ],
    senderName: process.env.FAXCORE_SENDER_NAME || 'FaxCore API Sample',
    subject: process.env.FAXCORE_SUBJECT || 'FaxCore API sample fax',
    note: process.env.FAXCORE_NOTE || 'Sent from the JavaScript sample.',
    priority: 0,
    isOnHold: false,
    trackings: [
      { label: 'Sample', value: 'JavaScript' }
    ],
    documents: [
      {
        name: process.env.FAXCORE_DOCUMENT_NAME || 'sample.pdf',
        path: process.env.FAXCORE_UPLOADED_FILE_NAME || 'replace-with-uploaded-file-name',
        isMerge: false
      }
    ]
  }
});

printResult('Send message', result);

