package uk.ac.bcu.kbe.bioen.service;

import com.google.gson.Gson;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.ac.bcu.kbe.bioen.dao.ExcelReader;
import uk.ac.bcu.kbe.bioen.model.InputBiogasModel;

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


    public BiogasManager() throws IOException {
        excelReader = new ExcelReader(filename);
    }

    public void setInput(String jsonString) throws ParseException {
        log.info("parsing string to json : "+jsonString);

        Gson gson = new Gson();
        InputBiogasModel model = gson.fromJson(jsonString , InputBiogasModel.class);
        log.info(" gson  = "+ model.getCows()+", "+model.getArea());

        int numCows = Integer.parseInt(model.getCows());
        int area = Integer.parseInt(model.getArea());
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
