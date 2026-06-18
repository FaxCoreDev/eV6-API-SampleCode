using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Contact
{
    internal static class GetContact
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (!config.ContactID.HasValue)
            {
                throw new InvalidOperationException("Set FAXCORE_CONTACT_ID before running user.contact.get.");
            }

            return client.GetAsync("/api/contact?model.contactID=" + Uri.EscapeDataString(config.ContactID.Value.ToString()));
        }
    }
}
