using Amazon.Lambda.APIGatewayEvents;
using Amazon.Lambda.TestUtilities;
using Xunit;

namespace Lambda.Tests
{
    public class FunctionTest
    {
        [Fact]
        public void TestGetMethod()
        {
            Functions functions = new Functions();

            var request = new APIGatewayProxyRequest();
            var context = new TestLambdaContext();
            var response = functions.Get(request, context);
            
            Assert.Equal(200, response.StatusCode);
            Assert.Equal("{\"numberOfAvailableParkingSpots\":157}", response.Body);
        }
    }
}
