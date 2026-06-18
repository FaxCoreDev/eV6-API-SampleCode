import { readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';
import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const uploadFile = process.env.FAXCORE_UPLOAD_FILE;
if (!uploadFile) {
  throw new Error('FAXCORE_UPLOAD_FILE is required. The send sample uploads this file first, then sends it as a message document.');
}

await stat(uploadFile);

const client = new FaxCoreClient();

const formData = new FormData();
const contentType = process.env.FAXCORE_UPLOAD_CONTENT_TYPE || guessContentType(uploadFile);
const file = contentType ? new Blob([await readFile(uploadFile)], { type: contentType }) : new Blob([await readFile(uploadFile)]);
formData.append(process.env.FAXCORE_UPLOAD_FIELD || '', file, basename(uploadFile));

const uploadResult = await client.postForm('/api/upload', formData);
const uploadedDocument = extractUploadedDocument(uploadResult);
const documents = [uploadedDocument];
const agents = buildAgents();

if (process.env.FAXCORE_COVER_PAGE_NAME) {
  documents.unshift({
    name: process.env.FAXCORE_COVER_PAGE_NAME,
    path: '',
    isMerge: true
  });
}

const sendResult = await client.post('/api/message/send', {
  message: {
    recipients: [
      {
        name: process.env.FAXCORE_RECIPIENT_NAME || 'Sample Recipient',
        address: process.env.FAXCORE_RECIPIENT_FAX || '+15551234567',
        rawFax: true,
        notifyAddress: process.env.FAXCORE_NOTIFY_ADDRESS || process.env.FAXCORE_RECIPIENT_FAX || '+15551234567',
        company: process.env.FAXCORE_RECIPIENT_COMPANY || 'Example Company'
      }
    ],
    senderName: process.env.FAXCORE_SENDER_NAME || 'FaxCore API Sample',
    senderCompName: process.env.FAXCORE_SENDER_COMPANY || 'Example Company',
    subject: process.env.FAXCORE_SUBJECT || 'FaxCore API sample fax',
    note: process.env.FAXCORE_NOTE || 'Sent from the JavaScript sample.',
    billingCode: process.env.FAXCORE_BILLING_CODE || 'Sample',
    scheduleDate: process.env.FAXCORE_SCHEDULE_DATE || today(),
    priority: Number(process.env.FAXCORE_PRIORITY || 60),
    isOnHold: false,
    mss: false,
    msf: false,
    trackings: [
      { label: 'Sample', value: 'JavaScript' }
    ],
    documents,
    agents
  }
});

printResult('Upload file', uploadResult);
printResult('Send message', sendResult);

function extractUploadedDocument(value) {
  const status = typeof value?.status === 'string' ? value.status.toLowerCase() : 'success';
  if (status !== 'success') {
    throw new Error(`Upload failed: ${value?.message || JSON.stringify(value)}`);
  }

  const item = Array.isArray(value?.data) ? value.data[0] : undefined;
  if (item?.id && item?.fileName) {
    return {
      name: item.id,
      path: item.fileName,
      isMerge: false
    };
  }

  throw new Error(`Upload response did not include data[0].id and data[0].fileName: ${JSON.stringify(value)}`);
}

function guessContentType(path) {
  const lower = path.toLowerCase();
  if (lower.endsWith('.pdf')) return 'application/pdf';
  if (lower.endsWith('.tif') || lower.endsWith('.tiff')) return 'image/tiff';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.txt')) return 'text/plain';
  if (lower.endsWith('.doc')) return 'application/msword';
  if (lower.endsWith('.docx')) return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
  return '';
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function buildAgents() {
  const id = process.env.FAXCORE_AGENT_ID;
  const type = process.env.FAXCORE_AGENT_TYPE;
  const value = process.env.FAXCORE_AGENT_VALUE;
  return id && type && value ? [{ id, type, value }] : [];
}
