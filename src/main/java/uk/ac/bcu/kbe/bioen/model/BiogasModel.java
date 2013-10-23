package uk.ac.bcu.kbe.bioen.model;

import com.google.common.collect.Maps;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.LoggerFactory;

import java.io.IOException;
import java.util.Map;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */
public class BiogasModel {

    private org.slf4j.Logger log = LoggerFactory.getLogger(this.getClass());

    //input variables
    private String filename = this.getClass().getClassLoader().getResource("biogas-fit-calculator.txt").getFile();
    ExcelReader excelReader;
    int numCows;
    int area;

    //output variables
    int biogas;
    int engergy;

    public BiogasModel() throws IOException {
        excelReader = new ExcelReader(filename);
    }

    public void setInput(String jsonString) throws ParseException {
        JSONObject jsonObject = stringToMap(jsonString);
        numCows = Integer.parseInt(jsonObject.get("num-cows").toString());
        area = Integer.parseInt(jsonObject.get("area").toString());
    }

    JSONObject stringToMap(String jsonString) throws ParseException {
        Map<String, String> map = Maps.newHashMap();
        JSONObject json = (JSONObject) new JSONParser().parse(jsonString);
        return json;
    }

    String getBiogas() {
        return excelReader.getCellValue(0, "d74");
    }

     String getEnergy() {
        return excelReader.getCellValue(0,"d50");
    }
}
