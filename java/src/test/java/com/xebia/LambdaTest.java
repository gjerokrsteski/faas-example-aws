package com.xebia;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.util.StringInputStream;
import org.json.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.junit.Test;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import static com.google.common.truth.Truth.assertThat;

public class LambdaTest {

    private JSONParser parser = new JSONParser();


    private Context createContext() {
        TestContext ctx = new TestContext();

        // TODO: customize your context here if needed.
        ctx.setFunctionName("LambdaForm");

        return ctx;
    }

    @Test
    public void testLambda() throws IOException, ParseException {
        //setup
        InputStream inputStream = new StringInputStream("");
        ByteArrayOutputStream outputStream = new ByteArrayOutputStream();
        Lambda lambda = new Lambda();

        lambda.handleRequest(inputStream, outputStream, createContext());

        //read output
        String string = new String(outputStream.toByteArray());
        JSONObject jsonObject = new JSONObject(string);
        String jsonBody = (String) jsonObject.get("body");
        JSONObject bodyObject = new JSONObject(jsonBody);
        Integer num = (Integer) bodyObject.get("NumberOfAvailableParkingSpots");

        //assert
        assertThat(num).isEqualTo(157);
    }

}

