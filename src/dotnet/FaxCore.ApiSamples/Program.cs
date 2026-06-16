using System;
using System.Threading.Tasks;

namespace FaxCore.ApiSamples
{
    internal static class Program
    {
        private static int Main(string[] args)
        {
            try
            {
                RunAsync(args).GetAwaiter().GetResult();
                return 0;
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine(ex.Message);
                return 1;
            }
        }

        private static async Task RunAsync(string[] args)
        {
            if (args.Length == 0 || args[0].Equals("help", StringComparison.OrdinalIgnoreCase))
            {
                PrintHelp();
                return;
            }

            var config = SampleConfig.Load();
            using (var client = new FaxCoreClient(config.BaseUrl, config.ClientId, config.ClientSecret, config.AccessToken))
            {
                var runner = new SampleRunner(client, config);
                var result = await runner.RunAsync(args[0]).ConfigureAwait(false);
                Console.WriteLine(result);
            }
        }

        private static void PrintHelp()
        {
            Console.WriteLine("FaxCore API Samples");
            Console.WriteLine();
            Console.WriteLine("Usage:");
            Console.WriteLine("  FaxCore.ApiSamples.exe <sample-name>");
            Console.WriteLine();
            Console.WriteLine("Samples:");
            Console.WriteLine("  auth.token");
            Console.WriteLine("  user.upload.file");
            Console.WriteLine("  user.message.list");
            Console.WriteLine("  user.message.send");
            Console.WriteLine("  user.message.status");
            Console.WriteLine("  user.contact.list");
            Console.WriteLine("  admin.domain.list");
            Console.WriteLine("  admin.user.list");
            Console.WriteLine("  admin.route.search");
            Console.WriteLine();
            Console.WriteLine("Set FaxCoreClientId and FaxCoreClientSecret in App.config or use FAXCORE_CLIENT_ID and FAXCORE_CLIENT_SECRET.");
        }
    }
}
