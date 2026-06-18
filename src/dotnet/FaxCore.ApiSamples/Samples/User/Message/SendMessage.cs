using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Web.Script.Serialization;

namespace FaxCore.ApiSamples.Samples.User.Message
{
    internal static class SendMessage
    {
        public static async Task<string> RunAsync(FaxCoreClient client, SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.UploadFile))
            {
                throw new InvalidOperationException("Set FAXCORE_UPLOAD_FILE or FaxCoreUploadFile before running user.message.send. The send sample uploads this file first, then sends it as a message document.");
            }

            if (!File.Exists(config.UploadFile))
            {
                throw new FileNotFoundException("Upload file was not found.", config.UploadFile);
            }

            var uploadResponse = await client.UploadFileAsync("/api/upload", config.UploadField, config.UploadFile, config.UploadContentType).ConfigureAwait(false);
            var documents = new List<object>();

            if (!string.IsNullOrWhiteSpace(config.CoverPageName))
            {
                documents.Add(new
                {
                    name = config.CoverPageName,
                    path = string.Empty,
                    isMerge = true
                });
            }

            documents.Add(ExtractUploadedDocument(uploadResponse));
            var agents = BuildAgents(config);

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
                            rawFax = true,
                            notifyAddress = "+15551234567",
                            company = "Example Company"
                        }
                    },
                    senderName = "FaxCore API Sample",
                    senderCompName = "Example Company",
                    subject = "FaxCore API sample fax",
                    note = "Sent from the .NET Framework sample.",
                    billingCode = "Sample",
                    scheduleDate = DateTime.Today.ToString("yyyy-MM-dd"),
                    priority = 60,
                    isOnHold = false,
                    mss = false,
                    msf = false,
                    trackings = new[]
                    {
                        new { label = "Sample", value = ".NET Framework" }
                    },
                    documents = documents.ToArray(),
                    agents = agents
                }
            };

            var sendResponse = await client.PostAsync("/api/message/send", request).ConfigureAwait(false);
            return "Upload response: " + uploadResponse + Environment.NewLine + "Send response: " + sendResponse;
        }

        private static object[] BuildAgents(SampleConfig config)
        {
            if (string.IsNullOrWhiteSpace(config.AgentID) ||
                string.IsNullOrWhiteSpace(config.AgentType) ||
                string.IsNullOrWhiteSpace(config.AgentValue))
            {
                return new object[0];
            }

            return new object[]
            {
                new
                {
                    id = config.AgentID,
                    type = config.AgentType,
                    value = config.AgentValue
                }
            };
        }

        private static object ExtractUploadedDocument(string uploadResponse)
        {
            var serializer = new JavaScriptSerializer();
            var value = serializer.DeserializeObject(uploadResponse);
            var root = value as IDictionary;
            var data = root != null && root.Contains("data") ? root["data"] as IEnumerable : null;

            if (data != null)
            {
                foreach (var item in data)
                {
                    var file = item as IDictionary;
                    if (file == null)
                    {
                        continue;
                    }

                    var id = file.Contains("id") ? file["id"] as string : null;
                    var fileName = file.Contains("fileName") ? file["fileName"] as string : null;
                    if (!string.IsNullOrWhiteSpace(id) && !string.IsNullOrWhiteSpace(fileName))
                    {
                        return new
                        {
                            name = id,
                            path = fileName,
                            isMerge = false
                        };
                    }
                }
            }

            throw new InvalidOperationException("Upload response did not include data[0].id and data[0].fileName: " + uploadResponse);
        }
    }
}
