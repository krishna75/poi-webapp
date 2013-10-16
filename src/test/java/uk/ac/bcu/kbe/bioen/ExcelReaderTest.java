package uk.ac.bcu.kbe.bioen;

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
       assertEquals("Krishna Sapkota",new  ExcelReader(filename).getCellValue(0,5,0));
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
