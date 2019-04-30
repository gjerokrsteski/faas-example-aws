import {handle} from "../src/lambda";
import {APIGatewayEvent} from "aws-lambda";

const EMPTY_BODY: any = {};
const EMPTY_CONTEXT: any = {};

const mockResolveTableName = jest.fn(() => Promise.resolve('table'));

jest.mock('./../src/properties', () => ({
    resolveTableName: () => mockResolveTableName(),
}));

let mockCount = 43;
const mockQueryResult = jest.fn(() => Promise.resolve({
    Count: mockCount
}));
jest.mock('aws-sdk', () => ({
    DynamoDB: {
        DocumentClient: class {
            scan() {
                return {
                    promise: mockQueryResult
                }
            };
        }
    }
}));

describe('test lambda', () => {
    it('should return 157', done => {
        handle(EMPTY_BODY as APIGatewayEvent, EMPTY_CONTEXT, (err, data) => {
            console.log(data);
            expect(err).toBeNull();
            expect(data).toBeDefined();
            expect(data.statusCode).toBe(200);
            let body = JSON.parse(data.body);
            expect(body.numberOfAvailableParkingSpots).toBe(157);
            done();
        });
    });
});
