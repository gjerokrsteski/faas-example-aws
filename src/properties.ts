export async function resolveTableName(): Promise<string> {
    if (!process.env.PARKING_GARAGE_TABLE_NAME) {
        return Promise.reject('env property PARKING_GARAGE_TABLE_NAME not found.');
    }
    return process.env.PARKING_GARAGE_TABLE_NAME.toString();
}