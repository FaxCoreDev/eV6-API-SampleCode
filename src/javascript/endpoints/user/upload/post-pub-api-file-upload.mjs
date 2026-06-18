import { readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';
import { FaxCoreClient, printResult } from '../../../common/faxcoreClient.mjs';

const filePath = process.env.FAXCORE_UPLOAD_FILE;
if (!filePath) {
  throw new Error('FAXCORE_UPLOAD_FILE is required for POST /api/upload.');
}

await stat(filePath);

const client = new FaxCoreClient();
const formData = new FormData();
const contentType = process.env.FAXCORE_UPLOAD_CONTENT_TYPE || guessContentType(filePath);
const file = contentType ? new Blob([await readFile(filePath)], { type: contentType }) : new Blob([await readFile(filePath)]);

formData.append(process.env.FAXCORE_UPLOAD_FIELD || '', file, basename(filePath));

const result = await client.postForm('/api/upload', formData);
const status = typeof result?.status === 'string' ? result.status.toLowerCase() : 'success';
if (status !== 'success') {
  throw new Error(`Upload failed: ${result?.message || JSON.stringify(result)}`);
}

printResult('FileUpload', result);

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
