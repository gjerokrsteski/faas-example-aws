package com.xebia;

import com.amazonaws.services.dynamodbv2.AmazonDynamoDB;
import com.amazonaws.services.dynamodbv2.AmazonDynamoDBClientBuilder;
import com.amazonaws.services.dynamodbv2.model.ScanRequest;
import com.amazonaws.services.dynamodbv2.model.ScanResult;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestStreamHandler;
import org.json.simple.JSONObject;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.OutputStreamWriter;

public class Lambda implements RequestStreamHandler {

    private static final int PARKING_CAPACITY = 200;
    private static final int NUMBER_OF_PARKED_CARS = 43;

    public void handleRequest(InputStream inputStream, OutputStream outputStream, Context context) throws IOException {

        JSONObject responseJson = new JSONObject();

        JSONObject responseBody = new JSONObject();
        responseBody.put("NumberOfAvailableParkingSpots", PARKING_CAPACITY - NUMBER_OF_PARKED_CARS);

        JSONObject headerJson = new JSONObject();
        headerJson.put("x-custom-header", "my custom header value");

        responseJson.put("statusCode", 200);
        responseJson.put("headers", headerJson);
        responseJson.put("body", responseBody.toString());


        OutputStreamWriter writer = new OutputStreamWriter(outputStream, "UTF-8");
        writer.write(responseJson.toString());
        writer.close();
    }

//    public ScanResult scan() {
//        AmazonDynamoDB client = AmazonDynamoDBClientBuilder.standard().build();
//
//        ScanRequest scanRequest = new ScanRequest()
//                .withTableName(System.getenv("PARKING_GARAGE_TABLE_NAME"));
//
//        return client.scan(scanRequest);
//    }


}