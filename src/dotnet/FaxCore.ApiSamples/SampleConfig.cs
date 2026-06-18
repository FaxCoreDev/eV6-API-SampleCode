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
        public long? ParentDomainID { get; private set; }
        public string DomainName { get; private set; }
        public string DomainDescription { get; private set; }
        public bool DomainActive { get; private set; }
        public string MessageId { get; private set; }
        public int XsactSeq { get; private set; }
        public int ImagePage { get; private set; }
        public int ImageWidth { get; private set; }
        public string MessageSubject { get; private set; }
        public long? TrackID { get; private set; }
        public string TrackValue { get; private set; }
        public string TargetUsernames { get; private set; }
        public string DelegateUsername { get; private set; }
        public string AgentID { get; private set; }
        public string AgentType { get; private set; }
        public string AgentValue { get; private set; }
        public long? ContactID { get; private set; }
        public long? ContactAddressID { get; private set; }
        public int AddressBookID { get; private set; }
        public string AddressBookName { get; private set; }
        public string ContactDisplayName { get; private set; }
        public string ContactFirstName { get; private set; }
        public string ContactLastName { get; private set; }
        public string ContactCompany { get; private set; }
        public string ContactPreferAddressType { get; private set; }
        public string ContactVisibility { get; private set; }
        public string ContactDescription { get; private set; }
        public bool ContactNotifyOnFailed { get; private set; }
        public bool ContactNotifyOnSuccess { get; private set; }
        public string ContactAddressType { get; private set; }
        public string ContactAddress { get; private set; }
        public string UploadFile { get; private set; }
        public string UploadField { get; private set; }
        public string UploadContentType { get; private set; }
        public string CoverPageName { get; private set; }
        public string ProfileUserID { get; private set; }
        public string ProfileRole { get; private set; }
        public bool ProfileExternalAuth { get; private set; }
        public bool ProfileActive { get; private set; }
        public string ProfileDisplayName { get; private set; }
        public string ProfileFirstName { get; private set; }
        public string ProfileLastName { get; private set; }
        public string ProfileCompany { get; private set; }
        public string ProfilePreferAddressType { get; private set; }
        public string ProfileDescription { get; private set; }
        public string ProfileCsid { get; private set; }
        public string ProfileCallerID { get; private set; }
        public string ProfileEmail { get; private set; }

        public static SampleConfig Load()
        {
            var config = new SampleConfig
            {
                BaseUrl = Read("FAXCORE_BASE_URL", "FaxCoreBaseUrl", "https://your-faxcore-server.example.com"),
                ClientId = Read("FAXCORE_CLIENT_ID", "FaxCoreClientId", null),
                ClientSecret = Read("FAXCORE_CLIENT_SECRET", "FaxCoreClientSecret", null),
                AccessToken = Read("FAXCORE_ACCESS_TOKEN", "FaxCoreAccessToken", null),
                Domain = Read("FAXCORE_DOMAIN", "FaxCoreDomain", string.Empty),
                ParentDomainID = ReadNullableInt64("FAXCORE_PARENT_DOMAIN_ID", "FaxCoreParentDomainID"),
                DomainName = Read("FAXCORE_DOMAIN_NAME", "FaxCoreDomainName", string.Empty),
                DomainDescription = Read("FAXCORE_DOMAIN_DESCRIPTION", "FaxCoreDomainDescription", string.Empty),
                DomainActive = ReadBool("FAXCORE_DOMAIN_ACTIVE", "FaxCoreDomainActive", true),
                MessageId = Read("FAXCORE_MESSAGE_ID", "FaxCoreMessageId", string.Empty),
                XsactSeq = ReadInt32("FAXCORE_XSACT_SEQ", "FaxCoreXsactSeq", 1),
                ImagePage = ReadInt32("FAXCORE_IMAGE_PAGE", "FaxCoreImagePage", 1),
                ImageWidth = ReadInt32("FAXCORE_IMAGE_WIDTH", "FaxCoreImageWidth", 800),
                MessageSubject = Read("FAXCORE_MESSAGE_SUBJECT", "FaxCoreMessageSubject", string.Empty),
                TrackID = ReadNullableInt64("FAXCORE_TRACK_ID", "FaxCoreTrackID"),
                TrackValue = Read("FAXCORE_TRACK_VALUE", "FaxCoreTrackValue", string.Empty),
                TargetUsernames = Read("FAXCORE_TARGET_USERNAMES", "FaxCoreTargetUsernames", string.Empty),
                DelegateUsername = Read("FAXCORE_DELEGATE_USERNAME", "FaxCoreDelegateUsername", string.Empty),
                AgentID = Read("FAXCORE_AGENT_ID", "FaxCoreAgentID", string.Empty),
                AgentType = Read("FAXCORE_AGENT_TYPE", "FaxCoreAgentType", string.Empty),
                AgentValue = Read("FAXCORE_AGENT_VALUE", "FaxCoreAgentValue", string.Empty),
                ContactID = ReadNullableInt64("FAXCORE_CONTACT_ID", "FaxCoreContactID"),
                ContactAddressID = ReadNullableInt64("FAXCORE_CONTACT_ADDRESS_ID", "FaxCoreContactAddressID"),
                AddressBookID = ReadInt32("FAXCORE_ADDRESS_BOOK_ID", "FaxCoreAddressBookID", 0),
                AddressBookName = Read("FAXCORE_ADDRESS_BOOK_NAME", "FaxCoreAddressBookName", "Sample Address Book"),
                ContactDisplayName = Read("FAXCORE_CONTACT_DISPLAY_NAME", "FaxCoreContactDisplayName", "Sample Contact"),
                ContactFirstName = Read("FAXCORE_CONTACT_FIRST_NAME", "FaxCoreContactFirstName", "Sample"),
                ContactLastName = Read("FAXCORE_CONTACT_LAST_NAME", "FaxCoreContactLastName", "Contact"),
                ContactCompany = Read("FAXCORE_CONTACT_COMPANY", "FaxCoreContactCompany", "Example Company"),
                ContactPreferAddressType = Read("FAXCORE_CONTACT_PREFER_ADDRESS_TYPE", "FaxCoreContactPreferAddressType", "Fax"),
                ContactVisibility = Read("FAXCORE_CONTACT_VISIBILITY", "FaxCoreContactVisibility", "Private"),
                ContactDescription = Read("FAXCORE_CONTACT_DESCRIPTION", "FaxCoreContactDescription", "Created from .NET sample"),
                ContactNotifyOnFailed = ReadBool("FAXCORE_CONTACT_NOTIFY_ON_FAILED", "FaxCoreContactNotifyOnFailed", true),
                ContactNotifyOnSuccess = ReadBool("FAXCORE_CONTACT_NOTIFY_ON_SUCCESS", "FaxCoreContactNotifyOnSuccess", true),
                ContactAddressType = Read("FAXCORE_CONTACT_ADDRESS_TYPE", "FaxCoreContactAddressType", "Fax"),
                ContactAddress = Read("FAXCORE_CONTACT_ADDRESS", "FaxCoreContactAddress", "+15551234567"),
                UploadFile = Read("FAXCORE_UPLOAD_FILE", "FaxCoreUploadFile", string.Empty),
                UploadField = Read("FAXCORE_UPLOAD_FIELD", "FaxCoreUploadField", string.Empty),
                UploadContentType = Read("FAXCORE_UPLOAD_CONTENT_TYPE", "FaxCoreUploadContentType", string.Empty),
                CoverPageName = Read("FAXCORE_COVER_PAGE_NAME", "FaxCoreCoverPageName", string.Empty),
                ProfileUserID = Read("FAXCORE_PROFILE_USER_ID", "FaxCoreProfileUserID", string.Empty),
                ProfileRole = Read("FAXCORE_PROFILE_ROLE", "FaxCoreProfileRole", "User"),
                ProfileExternalAuth = ReadBool("FAXCORE_PROFILE_EXTERNAL_AUTH", "FaxCoreProfileExternalAuth", false),
                ProfileActive = ReadBool("FAXCORE_PROFILE_ACTIVE", "FaxCoreProfileActive", true),
                ProfileDisplayName = Read("FAXCORE_PROFILE_DISPLAY_NAME", "FaxCoreProfileDisplayName", "Sample User"),
                ProfileFirstName = Read("FAXCORE_PROFILE_FIRST_NAME", "FaxCoreProfileFirstName", "Sample"),
                ProfileLastName = Read("FAXCORE_PROFILE_LAST_NAME", "FaxCoreProfileLastName", "User"),
                ProfileCompany = Read("FAXCORE_PROFILE_COMPANY", "FaxCoreProfileCompany", "Example Company"),
                ProfilePreferAddressType = Read("FAXCORE_PROFILE_PREFER_ADDRESS_TYPE", "FaxCoreProfilePreferAddressType", "Fax"),
                ProfileDescription = Read("FAXCORE_PROFILE_DESCRIPTION", "FaxCoreProfileDescription", "Updated from .NET sample"),
                ProfileCsid = Read("FAXCORE_PROFILE_CSID", "FaxCoreProfileCsid", string.Empty),
                ProfileCallerID = Read("FAXCORE_PROFILE_CALLER_ID", "FaxCoreProfileCallerID", string.Empty),
                ProfileEmail = Read("FAXCORE_PROFILE_EMAIL", "FaxCoreProfileEmail", "user@example.com")
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

        private static long? ReadNullableInt64(string environmentName, string appSettingName)
        {
            var value = Read(environmentName, appSettingName, string.Empty);
            if (string.IsNullOrWhiteSpace(value))
            {
                return null;
            }

            long result;
            if (!long.TryParse(value, out result))
            {
                throw new InvalidOperationException(environmentName + " must be a valid integer.");
            }

            return result;
        }

        private static int ReadInt32(string environmentName, string appSettingName, int defaultValue)
        {
            var value = Read(environmentName, appSettingName, defaultValue.ToString());
            int result;
            if (!int.TryParse(value, out result))
            {
                throw new InvalidOperationException(environmentName + " must be a valid integer.");
            }

            return result;
        }

        private static bool ReadBool(string environmentName, string appSettingName, bool defaultValue)
        {
            var value = Read(environmentName, appSettingName, defaultValue.ToString());
            bool result;
            if (!bool.TryParse(value, out result))
            {
                throw new InvalidOperationException(environmentName + " must be true or false.");
            }

            return result;
        }
    }
}
