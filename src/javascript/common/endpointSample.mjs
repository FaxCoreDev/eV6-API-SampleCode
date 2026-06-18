import { FaxCoreClient, printResult } from './faxcoreClient.mjs';

export async function runEndpointSample({ title, method, path, body, query = {}, destructive = false }) {
  if (destructive && process.env.FAXCORE_CONFIRM_DESTRUCTIVE !== 'true') {
    throw new Error('This sample changes or deletes data. Set FAXCORE_CONFIRM_DESTRUCTIVE=true to run it.');
  }

  const client = new FaxCoreClient();
  const verb = method.toLowerCase();
  let result;

  if (verb === 'get') {
    result = await client.get(path, query);
  } else if (verb === 'post') {
    result = await client.post(path, body || {}, query);
  } else if (verb === 'put') {
    result = await client.put(path, body || {}, query);
  } else if (verb === 'delete') {
    result = await client.delete(path, body || {}, query);
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }

  printResult(title, result);
}
