using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class UpdateMessageSubject
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to update a message subject.");
            }

            if (string.IsNullOrWhiteSpace(config.MessageId) || string.IsNullOrWhiteSpace(config.MessageSubject))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID and FAXCORE_MESSAGE_SUBJECT before running user.message.subject.update.");
            }

            return client.PutAsync("/api/message/subject", new
            {
                messageId = config.MessageId,
                value = config.MessageSubject
            });
        }
    }
}
