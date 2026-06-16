using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.Administration.User
{
    internal static class ListUsers
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            return client.PostAsync("/api/users/list", new { domain = config.Domain });
        }
    }
}

