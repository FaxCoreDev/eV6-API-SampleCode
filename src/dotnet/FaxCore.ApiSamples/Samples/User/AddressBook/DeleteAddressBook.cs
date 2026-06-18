using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.AddressBook
{
    internal static class DeleteAddressBook
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            RequireDestructiveConfirmation();
            return client.DeleteAsync("/api/addressbook", new { addressBookID = config.AddressBookID });
        }

        private static void RequireDestructiveConfirmation()
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete an address book.");
            }
        }
    }
}
