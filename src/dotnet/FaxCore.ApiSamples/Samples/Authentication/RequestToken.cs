using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace FaxCore.ApiSamples.Samples.Authentication
{
    internal static class RequestToken
    {
        public static async Task<string> RunAsync(SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.ClientId) || string.IsNullOrWhiteSpace(config.ClientSecret))
            {
                throw new InvalidOperationException("Set FAXCORE_CLIENT_ID and FAXCORE_CLIENT_SECRET before running auth.token.");
            }

            using (var httpClient = new HttpClient { BaseAddress = new Uri(config.BaseUrl.TrimEnd('/') + "/") })
            {
                var form = new FormUrlEncodedContent(new[]
                {
                    new KeyValuePair<string, string>("client_id", config.ClientId),
                    new KeyValuePair<string, string>("client_secret", config.ClientSecret),
                    new KeyValuePair<string, string>("grant_type", "client_credentials")
                });

                var response = await httpClient.PostAsync("/oauth/token", form).ConfigureAwait(false);
                var responseText = await response.Content.ReadAsStringAsync().ConfigureAwait(false);

                if (!response.IsSuccessStatusCode)
                {
                    throw new InvalidOperationException(string.Format(
                        "Token request failed with HTTP {0}: {1}",
                        (int)response.StatusCode,
                        responseText));
                }

                return PrettyJson(responseText);
            }
        }

        private static string PrettyJson(string text)
        {
            var serializer = new JavaScriptSerializer();
            try
            {
                return serializer.Serialize(serializer.DeserializeObject(text));
            }
            catch
            {
                return text;
            }
        }
    }
}
