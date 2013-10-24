package uk.ac.bcu.kbe.bioen.service;

import org.json.simple.JSONObject;
import org.junit.Before;
import org.junit.Test;
import uk.ac.bcu.kbe.bioen.dao.ExcelReader;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 16:13
 * To change this template use File | Settings | File Templates.
 */
public class BiogasManagerTest {
    BiogasManager manager;
    @Before
    public void initialize() throws IOException {
        String filename = this.getClass().getClassLoader().getResource("biogas-test.xlsx").getFile();
        manager = new BiogasManager(new ExcelReader(filename));
    }

    @Test
    public void testGetters() throws Exception {
        assertEquals("20", manager.getBiogas());
        assertEquals("100", manager.getEnergy());
    }

    @Test
    public void testGetOutput() throws Exception {
       manager.setInput("{\"cows\":\"200\",\"area\":\"300\"}");
       String output = manager.getOutput();
       assertEquals("{\"biogas\":\"20\",\"energy\":\"100\"}", output);

    }


}
