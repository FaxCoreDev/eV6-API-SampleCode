using System;
using System.IO;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples.Samples.User.Upload
{
    internal static class UploadFile
    {
        public static Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.UploadFile))
            {
                throw new InvalidOperationException("Set FAXCORE_UPLOAD_FILE or FaxCoreUploadFile before running user.upload.file.");
            }

            if (!File.Exists(config.UploadFile))
            {
                throw new FileNotFoundException("Upload file was not found.", config.UploadFile);
            }

            return client.UploadFileAsync("/api/upload", config.UploadField, config.UploadFile, config.UploadContentType);
        }
    }
}
