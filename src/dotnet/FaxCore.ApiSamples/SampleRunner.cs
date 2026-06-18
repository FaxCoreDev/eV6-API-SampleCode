using System;
using System.Threading.Tasks;
using FaxCore.ApiSamples.Samples.Authentication;
using FaxCore.ApiSamples.Samples.Administration.Domain;
using FaxCore.ApiSamples.Samples.Administration.Route;
using FaxCore.ApiSamples.Samples.Administration.User;
using FaxCore.ApiSamples.Samples.EndpointCoverage;
using FaxCore.ApiSamples.Samples.User.AddressBook;
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
            if (sampleName.Equals("endpoint.post-pub-api-file-upload", StringComparison.OrdinalIgnoreCase))
            {
                return UploadFile.RunAsync(client, config);
            }

            if (sampleName.StartsWith("endpoint.", StringComparison.OrdinalIgnoreCase))
            {
                return EndpointCoverageRunner.RunAsync(client, sampleName);
            }

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
                case "user.message.delegate":
                    return DelegateMessage.RunAsync(client, config);
                case "user.message.delete":
                    return DeleteMessage.RunAsync(client, config);
                case "user.message.trash.delete":
                    return DeleteTrashMessage.RunAsync(client, config);
                case "user.message.forward":
                    return ForwardMessage.RunAsync(client, config);
                case "user.message.status":
                    return GetMessageStatus.RunAsync(client, config);
                case "user.message.read_state":
                    return GetMessageReadState.RunAsync(client, config);
                case "user.message.delete_state":
                    return GetMessageDeleteState.RunAsync(client, config);
                case "user.message.image":
                    return GetMessageImage.RunAsync(client, config);
                case "user.message.subject.update":
                    return UpdateMessageSubject.RunAsync(client, config);
                case "user.message.tracking.get":
                    return GetTrackingRecords.RunAsync(client, config);
                case "user.message.tracking.update":
                    return UpdateTrackingRecord.RunAsync(client, config);
                case "user.contact.list":
                    return ListContacts.RunAsync(client);
                case "user.contact.get":
                    return GetContact.RunAsync(client, config);
                case "user.contact.create":
                    return CreateContact.RunAsync(client, config);
                case "user.contact.update":
                    return UpdateContact.RunAsync(client, config);
                case "user.contact.delete":
                    return DeleteContact.RunAsync(client, config);
                case "user.addressbook.list":
                    return ListAddressBooks.RunAsync(client);
                case "user.addressbook.create":
                    return CreateAddressBook.RunAsync(client, config);
                case "user.addressbook.update":
                    return UpdateAddressBook.RunAsync(client, config);
                case "user.addressbook.delete":
                    return DeleteAddressBook.RunAsync(client, config);
                case "admin.domain.list":
                    return ListDomains.RunAsync(client);
                case "admin.domain.create":
                    return CreateDomain.RunAsync(client, config);
                case "admin.user.profile.update":
                    return UpdateProfile.RunAsync(client, config);
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
