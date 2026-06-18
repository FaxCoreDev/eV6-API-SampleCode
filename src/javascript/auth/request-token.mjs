const baseUrl = (process.env.FAXCORE_BASE_URL || 'https://your-faxcore-server.example.com').replace(/\/+$/, '');
const clientId = process.env.FAXCORE_CLIENT_ID;
const clientSecret = process.env.FAXCORE_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  throw new Error('FAXCORE_CLIENT_ID and FAXCORE_CLIENT_SECRET are required.');
}

const body = new URLSearchParams({
  client_id: clientId,
  client_secret: clientSecret,
  grant_type: 'client_credentials'
});

const response = await fetch(`${baseUrl}/oauth/token`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    Accept: 'application/json'
  },
  body
});

const text = await response.text();
const data = text ? safeJson(text) : null;

if (!response.ok) {
  const details = typeof data === 'string' ? data : JSON.stringify(data);
  throw new Error(`Token request failed with HTTP ${response.status}: ${details}`);
}

console.log(JSON.stringify(data, null, 2));

function safeJson(value) {
  try {
    return JSON.parse(value);
  } catch {
    return value;
  }
}

