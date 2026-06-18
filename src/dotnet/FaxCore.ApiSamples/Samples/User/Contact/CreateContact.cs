using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Contact
{
    internal static class CreateContact
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            RequireDestructiveConfirmation();

            return client.PostAsync("/api/contact", new
            {
                addressBookID = config.AddressBookID,
                displayName = config.ContactDisplayName,
                firstName = config.ContactFirstName,
                lastName = config.ContactLastName,
                compName = config.ContactCompany,
                preferAddressType = config.ContactPreferAddressType,
                visibility = config.ContactVisibility,
                description = config.ContactDescription,
                notifyOnFailed = config.ContactNotifyOnFailed,
                notifyOnSuccess = config.ContactNotifyOnSuccess,
                addressList = new[]
                {
                    new
                    {
                        addrType = config.ContactAddressType,
                        address = config.ContactAddress
                    }
                }
            });
        }

        private static void RequireDestructiveConfirmation()
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to create a contact.");
            }
        }
    }
}
