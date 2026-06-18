using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class ListMessages
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            var request = new
            {
                folderName = Environment.GetEnvironmentVariable("FAXCORE_FOLDER") ?? "inbox",
                startDate = Environment.GetEnvironmentVariable("FAXCORE_START_DATE") ?? "20000101",
                endDate = Environment.GetEnvironmentVariable("FAXCORE_END_DATE") ?? "20991231",
                isRead = Environment.GetEnvironmentVariable("FAXCORE_IS_READ") ?? "all",
                isDownloaded = Environment.GetEnvironmentVariable("FAXCORE_IS_DOWNLOADED") ?? "all",
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
