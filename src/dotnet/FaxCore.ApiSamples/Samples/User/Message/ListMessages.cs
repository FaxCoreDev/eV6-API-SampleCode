using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class ListMessages
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            var request = new
            {
                folderName = "Inbox",
                sortDescending = true,
                pagination = new
                {
                    page = 1,
                    maxResult = 25
                }
            };

            return client.PostAsync("/api/message/list", request);
        }
    }
}

