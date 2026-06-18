using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class ForwardMessage
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to forward a message.");
            }

            if (string.IsNullOrWhiteSpace(config.MessageId) || string.IsNullOrWhiteSpace(config.TargetUsernames))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID and FAXCORE_TARGET_USERNAMES before running user.message.forward.");
            }

            return client.PostAsync("/api/message/forward", new
            {
                messageID = config.MessageId,
                usernames = config.TargetUsernames.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries)
            });
        }
    }
}
