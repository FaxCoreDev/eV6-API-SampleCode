using System;
using System.Threading.Tasks;
using FaxCore.ApiSamples.Samples.Authentication;
using FaxCore.ApiSamples.Samples.Administration.Domain;
using FaxCore.ApiSamples.Samples.Administration.Route;
using FaxCore.ApiSamples.Samples.Administration.User;
using FaxCore.ApiSamples.Samples.User.Contact;
using FaxCore.ApiSamples.Samples.User.Message;
using FaxCore.ApiSamples.Samples.User.Upload;

namespace FaxCore.ApiSamples
{
    internal sealed class SampleRunner
    {
        private readonly FaxCoreClient client;
        private readonly SampleConfig config;

        public SampleRunner(FaxCoreClient client, SampleConfig config)
        {
            this.client = client;
            this.config = config;
        }

        public Task<string> RunAsync(string sampleName)
        {
            switch (sampleName.ToLowerInvariant())
            {
                case "auth.token":
                    return RequestToken.RunAsync(config);
                case "user.upload.file":
                    return UploadFile.RunAsync(client, config);
                case "user.message.list":
                    return ListMessages.RunAsync(client);
                case "user.message.send":
                    return SendMessage.RunAsync(client, config);
                case "user.message.status":
                    return GetMessageStatus.RunAsync(client, config);
                case "user.contact.list":
                    return ListContacts.RunAsync(client);
                case "admin.domain.list":
                    return ListDomains.RunAsync(client);
                case "admin.user.list":
                    return ListUsers.RunAsync(client, config);
                case "admin.route.search":
                    return SearchRoutes.RunAsync(client);
                default:
                    throw new ArgumentException("Unknown sample name: " + sampleName);
            }
        }
    }
}
