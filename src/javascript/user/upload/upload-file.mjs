import { readFile, stat } from 'node:fs/promises';
import { basename } from 'node:path';
import { FaxCoreClient, printResult } from '../../common/faxcoreClient.mjs';

const filePath = process.env.FAXCORE_UPLOAD_FILE;
if (!filePath) {
  throw new Error('FAXCORE_UPLOAD_FILE is required.');
}

await stat(filePath);

const client = new FaxCoreClient();
const formData = new FormData();
const file = new Blob([await readFile(filePath)], { type: process.env.FAXCORE_UPLOAD_CONTENT_TYPE || 'application/octet-stream' });

formData.append(process.env.FAXCORE_UPLOAD_FIELD || 'file', file, basename(filePath));

const result = await client.postForm('/api/upload', formData);

printResult('Upload file', result);
