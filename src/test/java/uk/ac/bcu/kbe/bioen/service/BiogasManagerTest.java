package uk.ac.bcu.kbe.bioen.service;

import org.json.simple.JSONObject;
import org.junit.Test;
import uk.ac.bcu.kbe.bioen.service.BiogasManager;

import static org.junit.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */
public class BiogasManagerTest {

    @Test
    public void testStringToMap() throws Exception {
        String jsonString = "{\"num-cows\":\"200\",\"area\":\"300\"}";
        BiogasManager model = new BiogasManager();
        JSONObject json = model.stringToMap(jsonString);
        assertEquals("200", json.get("num-cows"));
        assertEquals("4.64", model.getBiogas());
        assertEquals("162725", model.getEnergy());
    }

    @Test
    public void testGetOutput() throws Exception {
       BiogasManager model = new BiogasManager();
       model.setInput("{\"num-cows\":\"200\",\"area\":\"300\"}");
       String output = model.getOutput();
       assertEquals("{\"biogas\":\"4.64\",\"energy\":\"2122416\n\"}", output);

    }


}
