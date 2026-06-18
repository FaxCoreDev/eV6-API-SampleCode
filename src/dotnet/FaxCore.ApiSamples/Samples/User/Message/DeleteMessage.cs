using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class DeleteMessage
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            RequireDestructiveConfirmation();
            if (string.IsNullOrWhiteSpace(config.MessageId))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID before running user.message.delete.");
            }

            return client.DeleteAsync("/api/message/delete", new { messageID = SplitCsv(config.MessageId) });
        }

        private static string[] SplitCsv(string value)
        {
            return value.Split(new[] { ',' }, StringSplitOptions.RemoveEmptyEntries);
        }

        private static void RequireDestructiveConfirmation()
        {
            if (!string.Equals(Environment.GetEnvironmentVariable("FAXCORE_CONFIRM_DESTRUCTIVE"), "true", StringComparison.OrdinalIgnoreCase))
            {
                throw new InvalidOperationException("Set FAXCORE_CONFIRM_DESTRUCTIVE=true to delete messages.");
            }
        }
    }
}

