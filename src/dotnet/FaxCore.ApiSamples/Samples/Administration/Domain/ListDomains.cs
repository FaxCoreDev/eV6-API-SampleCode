using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.Administration.Domain
{
    internal static class ListDomains
    {
        public static Task<string> RunAsync(FaxCoreClient client)
        {
            return client.GetAsync("/api/domain");
        }
    }
}

