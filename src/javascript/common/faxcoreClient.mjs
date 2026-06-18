const DEFAULT_BASE_URL = 'https://your-faxcore-server.example.com';

export class FaxCoreClient {
  constructor({
    baseUrl = process.env.FAXCORE_BASE_URL || DEFAULT_BASE_URL,
    clientId = process.env.FAXCORE_CLIENT_ID,
    clientSecret = process.env.FAXCORE_CLIENT_SECRET,
    accessToken = process.env.FAXCORE_ACCESS_TOKEN
  } = {}) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.accessToken = accessToken;
  }

  async get(path, query = {}) {
    return this.request('GET', path, undefined, query);
  }

  async post(path, body = {}, query = {}) {
    return this.request('POST', path, body, query);
  }

  async postForm(path, formData, query = {}) {
    return this.requestForm('POST', path, formData, query);
  }

  async put(path, body = {}, query = {}) {
    return this.request('PUT', path, body, query);
  }

  async delete(path, body = {}, query = {}) {
    return this.request('DELETE', path, body, query);
  }

  async request(method, path, body, query = {}) {
    const url = new URL(`${this.baseUrl}${path}`);

    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    }

    const accessToken = await this.getAccessToken();
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
        ...(body === undefined ? {} : { 'Content-Type': 'application/json' })
      },
      body: body === undefined ? undefined : JSON.stringify(body)
    });

    const text = await response.text();
    const data = text ? safeJson(text) : null;

    if (!response.ok) {
      const details = typeof data === 'string' ? data : JSON.stringify(data);
      throw new Error(`${method} ${path} failed with HTTP ${response.status}: ${details}`);
    }

    return data;
  }

  async requestForm(method, path, formData, query = {}) {
    const url = new URL(`${this.baseUrl}${path}`);

    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== '') {
        url.searchParams.set(key, String(value));
      }
    }

    const accessToken = await this.getAccessToken();
    const response = await fetch(url, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json'
      },
      body: formData
    });

    const text = await response.text();
    const data = text ? safeJson(text) : null;

    if (!response.ok) {
      const details = typeof data === 'string' ? data : JSON.stringify(data);
      throw new Error(`${method} ${path} failed with HTTP ${response.status}: ${details}`);
    }

    return data;
  }

  async getAccessToken() {
    if (this.accessToken) {
      return this.accessToken;
    }

    if (!this.clientId || !this.clientSecret) {
      throw new Error('FAXCORE_CLIENT_ID and FAXCORE_CLIENT_SECRET are required.');
    }

    const body = new URLSearchParams({
      client_id: this.clientId,
      client_secret: this.clientSecret,
      grant_type: 'client_credentials'
    });

    const response = await fetch(`${this.baseUrl}/oauth/token`, {
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

    if (!data || !data.access_token) {
      throw new Error('Token response did not include access_token.');
    }

    this.accessToken = data.access_token;
    return this.accessToken;
  }
}

function safeJson(text) {
  try {
    return JSON.parse(text);
  } catch {
    return text;
  }
}

export function printResult(title, result) {
  console.log(`\n${title}`);
  console.log(JSON.stringify(result, null, 2));
}
