package uk.ac.bcu.kbe.bioen.webapp.controller;

import org.junit.Test;

import static org.junit.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 23/10/13
 * Time: 14:45
 * To change this template use File | Settings | File Templates.
 */
public class HomeControllerTest {

    @Test
    public void testGetBiogasJson() throws Exception {
       HomeController controller = new HomeController();
        String output = controller.getBiogasJson("{\"cows\":\"20\",\"area\":\"20\"}");
        assertEquals("{\"cowBiogas\":25,\"cowSlurry\":80,\"area\":20,\"cropYield\":75000,\"biogas\":4,\"cropBiogas\":809215,\"cropDryMatter\":30,\"cowDryMatter\":6,\"energy\":141476,\"cows\":20}", output);

    }
}
