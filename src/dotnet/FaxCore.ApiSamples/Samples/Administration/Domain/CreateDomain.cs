using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.Administration.Domain
{
    internal static class CreateDomain
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (!config.ParentDomainID.HasValue || string.IsNullOrWhiteSpace(config.DomainName))
            {
                throw new InvalidOperationException("Set FAXCORE_PARENT_DOMAIN_ID and FAXCORE_DOMAIN_NAME before running admin.domain.create.");
            }

            var request = new
            {
                parentDomainID = config.ParentDomainID.Value,
                domainName = config.DomainName,
                description = config.DomainDescription,
                isActive = config.DomainActive
            };

            return client.PostAsync("/api/domain", request);
        }
    }
}
