using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class GetMessageStatus
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.MessageId))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID or FaxCoreMessageId before running user.message.status.");
            }

            return client.PostAsync("/api/message/status", new { messageID = config.MessageId });
        }
    }
}

