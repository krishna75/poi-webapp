package uk.ac.bcu.kbe.bioen.model;

import org.json.simple.JSONObject;
import org.junit.Test;
import uk.ac.bcu.kbe.bioen.webapp.controller.HomeController;

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
        String jsonString = "{\"num-cows\":\"205\",\"area\":\"300\"}";
        BiogasModel model = new BiogasModel();
        JSONObject json = model.stringToMap(jsonString);
        assertEquals("205", json.get("num-cows"));
        assertEquals("4.64", model.getBiogas());
        assertEquals("162725", model.getEnergy());
    }

    @Test
    public void testGetOutput() throws Exception {
       BiogasModel controller = new BiogasModel();
        String output = controller.getOutput();
        assertEquals("{\"biogas\":\"4.64\",\"energy\":\"162725\"}", output);

    }


}
