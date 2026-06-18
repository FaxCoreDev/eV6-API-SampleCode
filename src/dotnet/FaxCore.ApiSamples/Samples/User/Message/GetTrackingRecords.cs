using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class GetTrackingRecords
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.MessageId))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID or FaxCoreMessageId before running user.message.tracking.get.");
            }

            return client.PostAsync("/api/message/tracking", new { messageID = config.MessageId });
        }
    }
}

