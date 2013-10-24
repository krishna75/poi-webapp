package uk.ac.bcu.kbe.bioen.service;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.ac.bcu.kbe.bioen.dao.ExcelReader;

import java.io.IOException;

/**
 * Created with IntelliJ IDEA.
 * User: ID118320
 * Date: 22/10/13
 * Time: 13:29
 * To change this template use File | Settings | File Templates.
 */
public class BiogasManager {

    private Logger log = LoggerFactory.getLogger(this.getClass());

    //input variables
    private String filename = this.getClass().getClassLoader().getResource("biogas-test.xlsx").getFile();
    ExcelReader excelReader;
    int numCows;
    int area;

    //output variables
    int biogas;
    int engergy;

    public BiogasManager() throws IOException {
        excelReader = new ExcelReader(filename);
    }

    public void setInput(String jsonString) throws ParseException {
//        Gson gson = new Gson();
//        gson.toJson(jsonString , Map);
//        log.info(" gson  = "+ g.ge);

        JSONObject jsonObject = stringToMap(jsonString);
        numCows = Integer.parseInt(jsonObject.get("num-cows").toString());
        area = Integer.parseInt(jsonObject.get("area").toString());

        log.info("processing values "+ numCows+" and " + area);
        excelReader.setCellValue(0,"d5",numCows);
        excelReader.setCellValue(0,"d6",area);
    }

    JSONObject stringToMap(String jsonString) throws ParseException {
        log.info("parsing string to json : "+jsonString);
        return (JSONObject) new JSONParser().parse(jsonString);
    }

    public void update() throws IOException {
        excelReader.update();
    }

    public String getOutput() {
        JSONObject map = new JSONObject();
        map.put("biogas", getBiogas());
        map.put("energy", getEnergy());

        return map.toJSONString();
    }

    String getBiogas() {
        return excelReader.getCellValue(0, "d10");
    }

     String getEnergy() {
        return excelReader.getCellValue(0, "d11");
    }
}
