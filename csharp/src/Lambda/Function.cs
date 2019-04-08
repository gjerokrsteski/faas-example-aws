using System.Collections.Generic;
using System.Net;
using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.Core;
using Amazon.Lambda.Serialization.Json;

// Assembly attribute to enable the Lambda function's JSON input to be converted into a .NET class.
[assembly: LambdaSerializer(typeof(JsonSerializer))]

namespace Lambda
{
    public class Functions
    {
        /// <summary>
        /// A Lambda function to respond to HTTP Get methods from API Gateway
        /// </summary>
        /// <param name="request">The API Gateway request</param>
        /// <param name="context">The execution context</param>
        /// <returns>The number of available parking spots</returns>
        public APIGatewayProxyResponse Get(APIGatewayProxyRequest request, ILambdaContext context)
        {
            context.Logger.LogLine("Get the number of available parking spots.\n");

            uint numberOfAvailableParkingSpots = ParkingCapacity() - NumberOfParkedCars();

            var response = new APIGatewayProxyResponse
            {
                StatusCode = (int)HttpStatusCode.OK,
                Body = Newtonsoft.Json.JsonConvert.SerializeObject(new
                {
                    numberOfAvailableParkingSpots
                }),
                Headers = new Dictionary<string, string> {{"Content-Type", "application/json"}}
            };

            return response;
        }

        private static uint ParkingCapacity()
        {
            return 200;
        }

        private static uint NumberOfParkedCars()
        {
            return 43;
        }
    }
}
