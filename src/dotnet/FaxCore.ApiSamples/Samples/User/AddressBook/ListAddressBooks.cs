using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.AddressBook
{
    internal static class ListAddressBooks
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            return client.PostAsync("/api/addressbook/list", new
            {
                pagination = new
                {
                    search = Environment.GetEnvironmentVariable("FAXCORE_ADDRESS_BOOK_SEARCH") ?? string.Empty,
                    page = 1,
                    maxResult = 25
                }
            });
        }
    }
}
