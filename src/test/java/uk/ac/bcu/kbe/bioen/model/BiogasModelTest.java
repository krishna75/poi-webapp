package uk.ac.bcu.kbe.bioen.model;

import org.json.simple.JSONObject;
import org.junit.Test;

import java.util.Map;

import static org.junit.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */
public class BiogasModelTest {

    @Test
    public void testStringToMap() throws Exception {
        String jsonString = "{\"biogas\":\"205\",\"energy\":\"300\"}";
        BiogasModel model = new BiogasModel();
        JSONObject json = model.stringToMap(jsonString);
        assertEquals("205",json.get("biogas"));

    }
}
