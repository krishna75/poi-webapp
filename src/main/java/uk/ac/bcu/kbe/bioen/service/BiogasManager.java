package uk.ac.bcu.kbe.bioen.service;

import com.google.common.collect.Multimap;
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
    private final ExcelReader excelReader;

    public BiogasManager(ExcelReader excelReader) throws IOException {
        this. excelReader = excelReader;
    }

    public void setInput(String jsonString) throws ParseException {
        log.info("parsing string to json : "+jsonString);

        Gson gson = new Gson();
        InputBiogasModel model = gson.fromJson(jsonString , InputBiogasModel.class);
        log.info(" gson  = "+ model.getCows()+", "+model.getArea());

        int numCows = Integer.parseInt(model.getCows());
        int area = Integer.parseInt(model.getArea());
        log.info("processing values "+ numCows+" and " + area);
        excelReader.setCellValue(0,"d4",numCows);
        excelReader.setCellValue(0,"d5",area);
    }

    public void update(Multimap<Integer, String> sheetCells) throws IOException {
        excelReader.update(sheetCells);
    }

    public String getOutput() {
        JSONObject map = new JSONObject();
        map.put("biogas", getBiogas());
        map.put("energy", getEnergy());

        return map.toJSONString();
    }

    String getBiogas() {
        return excelReader.getCellValue(0, "d74");
    }

     String getEnergy() {
        return excelReader.getCellValue(0, "d50");
    }
}
