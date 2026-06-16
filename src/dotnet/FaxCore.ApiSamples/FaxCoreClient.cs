using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace FaxCore.ApiSamples
{
    internal sealed class FaxCoreClient : IDisposable
    {
        private readonly HttpClient httpClient;
        private readonly JavaScriptSerializer serializer = new JavaScriptSerializer();
        private readonly string clientId;
        private readonly string clientSecret;
        private string accessToken;

        public FaxCoreClient(string baseUrl, string clientId, string clientSecret, string accessToken)
        {
            this.clientId = clientId;
            this.clientSecret = clientSecret;
            this.accessToken = accessToken;
            httpClient = new HttpClient
            {
                BaseAddress = new Uri(baseUrl.TrimEnd('/') + "/")
            };
            httpClient.DefaultRequestHeaders.Accept.ParseAdd("application/json");
        }

        public Task<string> GetAsync(string path)
        {
            return SendAsync(HttpMethod.Get, path, null);
        }

        public Task<string> PostAsync(string path, object body)
        {
            return SendAsync(HttpMethod.Post, path, body);
        }

        public Task<string> PutAsync(string path, object body)
        {
            return SendAsync(HttpMethod.Put, path, body);
        }

        public Task<string> DeleteAsync(string path, object body)
        {
            return SendAsync(HttpMethod.Delete, path, body);
        }

        public async Task<string> UploadFileAsync(string path, string formFieldName, string filePath)
        {
            using (var form = new MultipartFormDataContent())
            using (var fileContent = new StreamContent(System.IO.File.OpenRead(filePath)))
            {
                fileContent.Headers.ContentType = new MediaTypeHeaderValue("application/octet-stream");
                form.Add(fileContent, formFieldName, System.IO.Path.GetFileName(filePath));

                var request = new HttpRequestMessage(HttpMethod.Post, path);
                request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", await GetAccessTokenAsync().ConfigureAwait(false));
                request.Content = form;

                var response = await httpClient.SendAsync(request).ConfigureAwait(false);
                var responseText = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
                if (!response.IsSuccessStatusCode)
                {
                    throw new InvalidOperationException(string.Format(
                        "POST {0} failed with HTTP {1}: {2}",
                        path,
                        (int)response.StatusCode,
                        responseText));
                }

                return PrettyJson(responseText);
            }
        }

        private async Task<string> SendAsync(HttpMethod method, string path, object body)
        {
            var request = new HttpRequestMessage(method, path);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", await GetAccessTokenAsync().ConfigureAwait(false));

            if (body != null)
            {
                var json = serializer.Serialize(body);
                request.Content = new StringContent(json, Encoding.UTF8, "application/json");
            }

            var response = await httpClient.SendAsync(request).ConfigureAwait(false);
            var responseText = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                throw new InvalidOperationException(string.Format(
                    "{0} {1} failed with HTTP {2}: {3}",
                    method,
                    path,
                    (int)response.StatusCode,
                    responseText));
            }

            return PrettyJson(responseText);
        }

        private async Task<string> GetAccessTokenAsync()
        {
            if (!string.IsNullOrWhiteSpace(accessToken))
            {
                return accessToken;
            }

            var request = new HttpRequestMessage(HttpMethod.Post, "/oauth/token");
            request.Content = new StringContent(
                "client_id=" + Uri.EscapeDataString(clientId) +
                "&client_secret=" + Uri.EscapeDataString(clientSecret) +
                "&grant_type=client_credentials",
                Encoding.UTF8,
                "application/x-www-form-urlencoded");

            var response = await httpClient.SendAsync(request).ConfigureAwait(false);
            var responseText = await response.Content.ReadAsStringAsync().ConfigureAwait(false);
            if (!response.IsSuccessStatusCode)
            {
                throw new InvalidOperationException(string.Format(
                    "Token request failed with HTTP {0}: {1}",
                    (int)response.StatusCode,
                    responseText));
            }

            var tokenResponse = serializer.Deserialize<TokenResponse>(responseText);
            if (tokenResponse == null || string.IsNullOrWhiteSpace(tokenResponse.access_token))
            {
                throw new InvalidOperationException("Token response did not include access_token.");
            }

            accessToken = tokenResponse.access_token;
            return accessToken;
        }

        private string PrettyJson(string text)
        {
            if (string.IsNullOrWhiteSpace(text))
            {
                return string.Empty;
            }

            try
            {
                var value = serializer.DeserializeObject(text);
                return serializer.Serialize(value);
            }
            catch
            {
                return text;
            }
        }

        public void Dispose()
        {
            httpClient.Dispose();
        }

        private sealed class TokenResponse
        {
            public string access_token { get; set; }
        }
    }
}
