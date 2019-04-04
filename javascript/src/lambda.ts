import {APIGatewayEvent, Callback, Context} from "aws-lambda";
import {DynamoDB} from 'aws-sdk';
import {resolveTableName} from "./properties";

const PARKING_CAPACITY: number = 200;
const NUMBER_OF_PARKED_CARS: number = 43;

//FUNCTION
export function handle(event: APIGatewayEvent, context: Context, callback: Callback) {

    let numberOfAvailableParkingSpots = {
        'numberOfAvailableParkingSpots' : PARKING_CAPACITY - NUMBER_OF_PARKED_CARS
    };

    return callback(null, Response.OK(JSON.stringify(numberOfAvailableParkingSpots)));
}

class Response {
    private headers = {};

    public static OK = (body: any) => new Response(200, body);
    public static INTERNAL_SERVER_ERROR = () => new Response(500, "{ 'Error' : 'Internal Server Error' }");

    constructor(public readonly statusCode: number, public readonly body: string) {

    }
}

// const documentClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();
//
// async function numberOfParkedCars(): Promise<number> {
//     const tableName = await resolveTableName();
//
//     const scanInput: DynamoDB.DocumentClient.ScanInput = {
//         TableName: tableName,
//     };
//
//     return documentClient.scan(scanInput).promise().then(
//         data => Promise.resolve(data.Count as number),
//         err => Promise.reject(err)
//     );
//
// }