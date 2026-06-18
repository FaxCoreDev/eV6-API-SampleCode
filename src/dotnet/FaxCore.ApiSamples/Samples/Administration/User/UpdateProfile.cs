using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.Administration.User
{
    internal static class UpdateProfile
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a user profile.");
            }

            if (string.IsNullOrWhiteSpace(config.ProfileUserID))
            {
                throw new InvalidOperationException("Set FAXCORE_PROFILE_USER_ID before running admin.user.profile.update.");
            }

            return client.PutAsync("/api/update/profile", new
            {
                id = config.ProfileUserID,
                profile = new
                {
                    role = config.ProfileRole,
                    isExternalAuth = config.ProfileExternalAuth,
                    isActive = config.ProfileActive,
                    displayName = config.ProfileDisplayName,
                    firstName = config.ProfileFirstName,
                    lastName = config.ProfileLastName,
                    companyName = config.ProfileCompany,
                    preferAddressType = config.ProfilePreferAddressType,
                    desc = config.ProfileDescription,
                    csid = config.ProfileCsid,
                    callerID = config.ProfileCallerID,
                    email = config.ProfileEmail,
                    addresses = new object[0]
                }
            });
        }
    }
}
