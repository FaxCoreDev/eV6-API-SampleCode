using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class UpdateTrackingRecord
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.MessageId) || !config.TrackID.HasValue || string.IsNullOrWhiteSpace(config.TrackValue))
            {
                throw new InvalidOperationException("Set FAXCORE_MESSAGE_ID, FAXCORE_TRACK_ID, and FAXCORE_TRACK_VALUE before running user.message.tracking.update.");
            }

            return client.PutAsync("/api/message/tracking", new
            {
                messageID = config.MessageId,
                trackID = config.TrackID.Value,
                trackValue = config.TrackValue
            });
        }
    }
}

