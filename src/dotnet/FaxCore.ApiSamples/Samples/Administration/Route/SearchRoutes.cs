using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.Administration.Route
{
    internal static class SearchRoutes
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            return client.PostAsync("/api/route/search", new { input = string.Empty });
        }
    }
}

