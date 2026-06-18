using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class GetMessageImage
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.MessageId))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID before running user.message.image.");
            }

            var path = string.Format(
                "/api/message/image?model.messageID={0}&model.xsactSeq={1}&model.page={2}&model.width={3}",
                Uri.EscapeDataString(config.MessageId),
                config.XsactSeq,
                config.ImagePage,
                config.ImageWidth);

            return client.GetAsync(path);
        }
    }
}

