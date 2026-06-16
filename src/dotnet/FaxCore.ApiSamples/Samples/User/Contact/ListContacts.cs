using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Contact
{
    internal static class ListContacts
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            var request = new
            {
                addressBookID = 0,
                isContactGroup = false,
                addressType = new[] { "Fax", "Email" },
                pagination = new
                {
                    search = string.Empty,
                    page = 1,
                    maxResult = 25
                }
            };

            return client.PostAsync("/api/contact/list", request);
        }
    }
}

