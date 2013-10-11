package uk.ac.bcu.kbe.bioen;

import org.junit.Test;
import org.slf4j.LoggerFactory;
import org.slf4j.Logger;

import static org.junit.Assert.assertEquals;


/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 11/10/13
 * Time: 12:38
 * To change this template use File | Settings | File Templates.
 */


public class ExcelReaderTest {
    Logger log = LoggerFactory.getLogger(this.getClass());

    @Test
    public void testGetSomething() throws Exception {

        String filename = this.getClass().getClassLoader().getResource("test.xlsx").getFile();
        log.debug(filename);
        assertEquals("something", new ExcelReader(filename).getSomething());

    }
}
