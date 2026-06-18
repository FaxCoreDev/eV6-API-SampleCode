using System;
using System.Collections;
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

        public Task<string> SendJsonAsync(string method, string path, string json)
        {
            return SendRawAsync(new HttpMethod(method), path, json);
        }

        public async Task<string> UploadFileAsync(string path, string formFieldName, string filePath, string contentType)
        {
            using (var form = new MultipartFormDataContent())
            using (var fileContent = new StreamContent(System.IO.File.OpenRead(filePath)))
            {
                var uploadContentType = string.IsNullOrWhiteSpace(contentType) ? GuessContentType(filePath) : contentType;
                if (!string.IsNullOrWhiteSpace(uploadContentType))
                {
                    fileContent.Headers.ContentType = new MediaTypeHeaderValue(uploadContentType);
                }

                fileContent.Headers.ContentDisposition = new ContentDispositionHeaderValue("form-data")
                {
                    Name = QuoteHeaderValue(formFieldName ?? string.Empty),
                    FileName = QuoteHeaderValue(System.IO.Path.GetFileName(filePath))
                };

                form.Add(fileContent);

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

                ThrowIfApplicationError("Upload", responseText);
                return PrettyJson(responseText);
            }
        }

        private async Task<string> SendAsync(HttpMethod method, string path, object body)
        {
            var json = body == null ? null : serializer.Serialize(body);
            return await SendRawAsync(method, path, json).ConfigureAwait(false);
        }

        private async Task<string> SendRawAsync(HttpMethod method, string path, string json)
        {
            var request = new HttpRequestMessage(method, path);
            request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", await GetAccessTokenAsync().ConfigureAwait(false));

            if (!string.IsNullOrWhiteSpace(json))
            {
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

        private void ThrowIfApplicationError(string operationName, string responseText)
        {
            try
            {
                var value = serializer.DeserializeObject(responseText) as IDictionary;
                if (value == null || !value.Contains("status"))
                {
                    return;
                }

                var status = value["status"] as string;
                if (string.IsNullOrWhiteSpace(status) || status.Equals("Success", StringComparison.OrdinalIgnoreCase))
                {
                    return;
                }

                var message = value.Contains("message") ? value["message"] as string : null;
                throw new InvalidOperationException(operationName + " failed: " + (string.IsNullOrWhiteSpace(message) ? responseText : message));
            }
            catch (InvalidOperationException)
            {
                throw;
            }
            catch
            {
            }
        }

        private static string GuessContentType(string filePath)
        {
            var extension = System.IO.Path.GetExtension(filePath);
            if (extension == null)
            {
                return string.Empty;
            }

            switch (extension.ToLowerInvariant())
            {
                case ".pdf":
                    return "application/pdf";
                case ".tif":
                case ".tiff":
                    return "image/tiff";
                case ".png":
                    return "image/png";
                case ".jpg":
                case ".jpeg":
                    return "image/jpeg";
                case ".txt":
                    return "text/plain";
                case ".doc":
                    return "application/msword";
                case ".docx":
                    return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
                default:
                    return string.Empty;
            }
        }

        private static string QuoteHeaderValue(string value)
        {
            return "\"" + (value ?? string.Empty).Replace("\\", "\\\\").Replace("\"", "\\\"") + "\"";
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
