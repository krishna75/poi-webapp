package uk.ac.bcu.kbe.bioen.model;

import com.google.common.collect.Lists;
import org.junit.Test;
import uk.ac.bcu.kbe.bioen.model.ExcelReader;

import java.io.IOException;
import java.util.List;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;


/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 11/10/13
 * Time: 12:38
 * To change this template use File | Settings | File Templates.
 */


public class ExcelReaderTest {
    String filename = this.getClass().getClassLoader().getResource("test.xlsx").getFile();

    @Test
    public void testGetRowValues() throws Exception {
        assertTrue(contains(new ExcelReader(filename).getRowValues(0, 4)
                ,(Lists.newArrayList("Name", "Address", "Phone", "Email"))));
        assertTrue(contains(new ExcelReader(filename).getRowValues(0, 5)
                ,(Lists.newArrayList("Krishna Sapkota", "303 Hollow Way", "7.727682394E9", "ks_21285@hotmail.com"))));

    }

    @Test
    public void testCellValue() throws IOException {
       assertEquals("Krishna Sapkota", new ExcelReader(filename).getCellValue(0, 5, 0));
    }

    @Test
    public void testConvertLettersToInteger() throws IOException {
       assertEquals(0,new  ExcelReader(filename).convertLettersToInteger("A"));
       assertEquals(0,new  ExcelReader(filename).convertLettersToInteger("a"));
       assertEquals(4,new  ExcelReader(filename).convertLettersToInteger("E"));
       assertEquals(26,new  ExcelReader(filename).convertLettersToInteger("aa"));
       assertEquals(27,new  ExcelReader(filename).convertLettersToInteger("ab"));
    }
    @Test
    public void testSplitCellId() throws IOException {
        ExcelReader reader = new ExcelReader(filename);
        String[] cell1 = reader.splitCellId("e5");
        String[] cell2 = reader.splitCellId("Ae10");
        assertEquals("e", cell1[0]);
        assertEquals("5", cell1[1]);
        assertEquals("Ae", cell2[0]);
        assertEquals("10", cell2[1]);
    }

    @Test
    public void testCellValueWithCellId() throws IOException {
        ExcelReader reader =  new ExcelReader(filename);
        assertEquals("Name", reader.getCellValue(0, "a4"));
        assertEquals("Krishna Sapkota", reader.getCellValue(0, "a5"));
        assertEquals("Email", reader.getCellValue(0, "d4"));
        assertEquals("ks_21285@hotmail.com", reader.getCellValue(0, "d5"));
    }



    private boolean contains(List<String> list1, List<String> list2) {
        boolean found = true;
        for (String item : list2) {
            if (!list1.contains(item)) {
                found = false;
                System.out.println(item);
                break;
            }
        }
        if (!found) {
            System.out.println(list1 +"\n" + list2);
        }
        return found;
    }

}
