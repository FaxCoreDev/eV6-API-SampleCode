using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.AddressBook
{
    internal static class CreateAddressBook
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            RequireDestructiveConfirmation();
            return client.PostAsync("/api/addressbook", new { addressBookName = config.AddressBookName });
        }

        private static void RequireDestructiveConfirmation()
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to create an address book.");
            }
        }
    }
}
