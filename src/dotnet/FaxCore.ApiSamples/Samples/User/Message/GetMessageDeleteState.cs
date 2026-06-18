using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class GetMessageDeleteState
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.MessageId))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID before running user.message.delete_state.");
            }

            return client.PostAsync("/api/message/delete_state", new { messageID = config.MessageId });
        }
    }
}

