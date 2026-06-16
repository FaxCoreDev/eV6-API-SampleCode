using System;
using System.Configuration;

namespace FaxCore.ApiSamples
{
    internal sealed class SampleConfig
    {
        public string BaseUrl { get; private set; }
        public string ClientId { get; private set; }
        public string ClientSecret { get; private set; }
        public string AccessToken { get; private set; }
        public string Domain { get; private set; }
        public string MessageId { get; private set; }
        public string UploadFile { get; private set; }
        public string UploadField { get; private set; }
        public string UploadedFileName { get; private set; }

        public static SampleConfig Load()
        {
            var config = new SampleConfig
            {
                BaseUrl = Read("FAXCORE_BASE_URL", "FaxCoreBaseUrl", "https://123.faxcoreasia.com"),
                ClientId = Read("FAXCORE_CLIENT_ID", "FaxCoreClientId", null),
                ClientSecret = Read("FAXCORE_CLIENT_SECRET", "FaxCoreClientSecret", null),
                AccessToken = Read("FAXCORE_ACCESS_TOKEN", "FaxCoreAccessToken", null),
                Domain = Read("FAXCORE_DOMAIN", "FaxCoreDomain", string.Empty),
                MessageId = Read("FAXCORE_MESSAGE_ID", "FaxCoreMessageId", string.Empty),
                UploadFile = Read("FAXCORE_UPLOAD_FILE", "FaxCoreUploadFile", string.Empty),
                UploadField = Read("FAXCORE_UPLOAD_FIELD", "FaxCoreUploadField", "file"),
                UploadedFileName = Read("FAXCORE_UPLOADED_FILE_NAME", "FaxCoreUploadedFileName", string.Empty)
            };

            if (string.IsNullOrWhiteSpace(config.AccessToken) &&
                (string.IsNullOrWhiteSpace(config.ClientId) || string.IsNullOrWhiteSpace(config.ClientSecret)))
            {
                throw new InvalidOperationException("FaxCore OAuth credentials are required. Set FAXCORE_CLIENT_ID and FAXCORE_CLIENT_SECRET, or set FAXCORE_ACCESS_TOKEN.");
            }

            return config;
        }

        private static string Read(string environmentName, string appSettingName, string defaultValue)
        {
            var value = Environment.GetEnvironmentVariable(environmentName);
            if (!string.IsNullOrWhiteSpace(value))
            {
                return value;
            }

            value = ConfigurationManager.AppSettings[appSettingName];
            return string.IsNullOrWhiteSpace(value) ? defaultValue : value;
        }
    }
}
