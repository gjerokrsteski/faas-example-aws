import {APIGatewayEvent, Callback, Context} from "aws-lambda";
import {DynamoDB} from 'aws-sdk';
import {resolveTableName} from "./properties";

const PARKING_CAPACITY: number = 200;
const documentClient: DynamoDB.DocumentClient = new DynamoDB.DocumentClient();

export function handle(event: APIGatewayEvent, context: Context, callback: Callback) {

    numberOfParkedCars()
        .then(
            numberOfParkedCars => {
                let body = {
                    'numberOfAvailableParkingSpots': (PARKING_CAPACITY - numberOfParkedCars)
                };
                callback(null, Response.OK(JSON.stringify(body)));
            },
            err => {
                console.error(err);
                callback(null, Response.INTERNAL_SERVER_ERROR);
            }
        )
}

class Response {
    private headers = {};
    constructor(public readonly statusCode: number, public readonly body: string) {
    }
    public static OK = (body: any) => new Response(200, body);
    public static INTERNAL_SERVER_ERROR = () => new Response(500, "{ 'Error' : 'Internal Server Error' }");
}

async function numberOfParkedCars(): Promise<number> {
    const tableName = await resolveTableName();
    const scanInput: DynamoDB.DocumentClient.ScanInput = {
        TableName: tableName,
    };

    return documentClient.scan(scanInput).promise().then(
        data => Promise.resolve(data.Count as number),
        err => Promise.reject(err)
    );
}
