using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class SendMessage
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.UploadedFileName))
            {
                throw new InvalidOperationException("Set FAXCORE_UPLOADED_FILE_NAME or FaxCoreUploadedFileName before running user.message.send.");
            }

            var request = new
            {
                message = new
                {
                    recipients = new[]
                    {
                        new
                        {
                            name = "Sample Recipient",
                            address = "+15551234567",
                            rawFax = true
                        }
                    },
                    senderName = "FaxCore API Sample",
                    subject = "FaxCore API sample fax",
                    note = "Sent from the .NET Framework sample.",
                    priority = 0,
                    isOnHold = false,
                    trackings = new[]
                    {
                        new { label = "Sample", value = ".NET Framework" }
                    },
                    documents = new[]
                    {
                        new
                        {
                            name = "sample.pdf",
                            path = config.UploadedFileName,
                            isMerge = false
                        }
                    }
                }
            };

            return client.PostAsync("/api/message/send", request);
        }
    }
}

