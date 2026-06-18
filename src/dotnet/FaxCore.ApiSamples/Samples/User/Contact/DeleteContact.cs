using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Contact
{
    internal static class DeleteContact
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            RequireDestructiveConfirmation();

            if (!config.ContactID.HasValue)
            {
                throw new InvalidOperationException("Set FAXCORE_CONTACT_ID before running user.contact.delete.");
            }

            return client.DeleteAsync("/api/contact", new { contactID = config.ContactID.Value });
        }

        private static void RequireDestructiveConfirmation()
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete a contact.");
            }
        }
    }
}
